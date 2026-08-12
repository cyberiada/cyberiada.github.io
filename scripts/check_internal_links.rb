#!/usr/bin/env ruby

require "cgi"
require "nokogiri"
require "pathname"
require "set"
require "uri"
require "yaml"

build_root = Pathname.new(File.expand_path(ARGV.fetch(0, "_site")))
baseurl = ENV.fetch("BASEURL", "").sub(%r{/$}, "")
site_host = ENV.fetch("SITE_HOST", "cyberiada.github.io")
project_pages_file = Pathname.new(__dir__).join("..", "_data", "project_pages.yml").expand_path
project_directories = YAML.safe_load_file(project_pages_file).to_set
html_files = Dir.glob(build_root.join("**", "*.html")).reject do |file|
  relative = Pathname.new(file).relative_path_from(build_root)
  project_directories.include?(relative.each_filename.first)
end.sort
errors = []
checked = 0

def page_url(file, root)
  relative = Pathname.new(file).relative_path_from(root).to_s
  return "/" if relative == "index.html"
  return "/#{relative.delete_suffix("index.html")}" if relative.end_with?("/index.html")

  "/#{relative}"
end

def target_candidates(root, path)
  clean = CGI.unescape(path).sub(%r{^/+}, "")
  target = root.join(clean)
  return [target.join("index.html")] if path.end_with?("/")
  return [target] unless File.extname(clean).empty?

  [target, Pathname.new("#{target}.html"), target.join("index.html")]
end

html_files.each do |file|
  document = Nokogiri::HTML5(File.read(file))
  current_url = page_url(file, build_root)

  document.css("a[href], link[href], img[src], script[src]").each do |element|
    attribute = element.key?("href") ? "href" : "src"
    raw = element[attribute].to_s.strip
    next if raw.empty? || raw.start_with?("mailto:", "tel:", "javascript:", "data:")

    begin
      uri = URI.parse(raw)
    rescue URI::InvalidURIError
      errors << "#{file}: invalid URL #{raw.inspect}"
      next
    end

    next if uri.host && uri.host != site_host

    if uri.host
      path = uri.path
    elsif raw.start_with?("#")
      path = current_url
    elsif uri.path.start_with?("/")
      path = uri.path
    else
      path = URI.join("https://local.test#{current_url}", uri.path).path
    end

    path = path.delete_prefix(baseurl) if path == baseurl || path.start_with?("#{baseurl}/")
    path = "/" if path.empty?
    candidates = target_candidates(build_root, path)
    target = candidates.find(&:file?)
    checked += 1

    unless target
      errors << "#{file}: #{raw.inspect} does not resolve to a generated file"
      next
    end

    next if uri.fragment.to_s.empty? || target.extname != ".html"

    target_document = Nokogiri::HTML5(File.read(target))
    fragment = CGI.unescape(uri.fragment)
    selector = "[id='#{fragment.gsub("'", "\\\\'")}'], [name='#{fragment.gsub("'", "\\\\'")}']"
    errors << "#{file}: #{raw.inspect} points to a missing fragment" unless target_document.at_css(selector)
  end
end

if errors.empty?
  puts "Internal links/assets: #{checked} references checked successfully."
else
  warn "Internal link validation failed:"
  errors.each { |error| warn "  - #{error}" }
  exit 1
end

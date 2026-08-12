#!/usr/bin/env ruby

require "yaml"

root = File.expand_path("..", __dir__)
data_path = File.join(root, "_data", "publist.yml")
image_dir = File.join(root, "images", "pubpic")
publications = YAML.safe_load_file(data_path, permitted_classes: [], aliases: false)

errors = []

publications.each_with_index do |publication, index|
  title = publication.fetch("title", "Publication ##{index + 1}")
  image = publication["image"]

  if image.nil? || image.strip.empty?
    errors << "#{title}: missing image field"
    next
  end

  image_path = File.expand_path(image, image_dir)
  unless image_path.start_with?(image_dir + File::SEPARATOR)
    errors << "#{title}: image path escapes images/pubpic (#{image})"
    next
  end

  errors << "#{title}: image does not exist (images/pubpic/#{image})" unless File.file?(image_path)
end

if errors.empty?
  puts "Publication images: #{publications.length} entries checked successfully."
else
  warn "Publication image validation failed:"
  errors.each { |error| warn "  - #{error}" }
  exit 1
end

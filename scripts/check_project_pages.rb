#!/usr/bin/env ruby

require "yaml"

root = File.expand_path("..", __dir__)
publications = YAML.safe_load_file(File.join(root, "_data", "publist.yml"), permitted_classes: [], aliases: false)
project_pages = YAML.safe_load_file(File.join(root, "_data", "project_pages.yml"), permitted_classes: [], aliases: false)
referenced_slugs = publications.filter_map { |publication| publication["project_slug"] }.uniq
missing_slugs = referenced_slugs - project_pages

if missing_slugs.empty?
  puts "Project pages: #{referenced_slugs.length} referenced folders are registered."
else
  warn "Project page validation failed. Add these destination folders to _data/project_pages.yml:"
  missing_slugs.each { |slug| warn "  - #{slug}" }
  exit 1
end

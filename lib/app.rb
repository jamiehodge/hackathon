require "puma"
require "rack/cache"
require "sinatra"
require "yajl"

require_relative "events"

set(:encoder) { Yajl::Encoder.method(:encode) }
set(:events) { Events.new }
set(:max_age) { 60 * 60 * 24 }

use(Rack::Cache)
use(Rack::Deflater)

before do
  response.headers["Access-Control-Allow-Origin"] = "*"
end

get("/") do
  cache(events)
  respond_with(events)
end

def events
  @events ||= settings.events.list
end

def cache(resource)
  cache_control(:public, max_age: settings.max_age)
end

def encode(resource, &block)
  settings.encoder.(resource, &block)
end

def respond_with(resource)
  content_type(:json)

  stream do |out|
    encode(resource) do |chunk|
      chunk ? out << chunk : out.close
    end
  end
end

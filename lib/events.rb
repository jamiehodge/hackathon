require "net/http"
require "uri"

require_relative "extensions"

URL = "http://reactjs.meetup.com/newest/json/".freeze

class Events
  def initialize(**options)
    @client = options.fetch(:client) { Net::HTTP }
    @url = URI options.fetch(:url) { URL }
  end

  def list
    eval(client.get(url)).map {|event| event.slice(KEYS)}
  end

  private

  attr_reader :client, :url

  KEYS = %i(name number lat lon member_count)
end

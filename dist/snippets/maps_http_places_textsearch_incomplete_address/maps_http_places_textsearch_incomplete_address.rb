# [START maps_http_places_textsearch_incomplete_address]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/place/textsearch/json?query=123%20main%20street&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_places_textsearch_incomplete_address]
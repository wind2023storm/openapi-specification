# [START maps_http_timezone_request_denied]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/timezone/json?key=")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_timezone_request_denied]
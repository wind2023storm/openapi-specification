# [START maps_http_elevation_locations_multiple]
require "uri"
require "net/http"

url = URI("https://maps.googleapis.com/maps/api/elevation/json?locations=39.7391536%2C-104.9847034%7C36.455556%2C-116.866667&key=YOUR_API_KEY")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)

response = https.request(request)
puts response.read_body

# [END maps_http_elevation_locations_multiple]
# [START maps_http_elevation_locations_multiple]
import requests

url = "https://maps.googleapis.com/maps/api/elevation/json?locations=39.7391536%2C-104.9847034%7C36.455556%2C-116.866667&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_elevation_locations_multiple]
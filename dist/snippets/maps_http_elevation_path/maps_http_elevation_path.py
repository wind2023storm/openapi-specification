# [START maps_http_elevation_path]
import requests

url = "https://maps.googleapis.com/maps/api/elevation/json?path=36.578581%2C-118.291994%7C36.23998%2C-116.83171&samples=3&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_elevation_path]
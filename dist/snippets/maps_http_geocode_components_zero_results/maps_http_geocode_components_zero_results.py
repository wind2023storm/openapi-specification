# [START maps_http_geocode_components_zero_results]
import requests

url = "https://maps.googleapis.com/maps/api/geocode/json?components=administrative_area%3ATX%7Ccountry%3AFR&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_geocode_components_zero_results]
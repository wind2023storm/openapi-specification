# [START maps_http_distancematrix_plus_code]
import requests

url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=849VCWC8%2BR9&destinations=San%20Francisco&key=YOUR_API_KEY"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

# [END maps_http_distancematrix_plus_code]
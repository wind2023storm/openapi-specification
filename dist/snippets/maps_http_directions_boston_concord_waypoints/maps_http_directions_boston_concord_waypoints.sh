# [START maps_http_directions_boston_concord_waypoints]
curl -L -X GET 'https://maps.googleapis.com/maps/api/directions/json?origin=Boston,%20MA&destination=Concord,%20MA&waypoints=via:Charlestown,MA|via:Lexington,MA&key=YOUR_API_KEY'
# [END maps_http_directions_boston_concord_waypoints]
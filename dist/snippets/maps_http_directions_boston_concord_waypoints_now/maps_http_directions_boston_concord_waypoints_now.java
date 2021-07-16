// [START maps_http_directions_boston_concord_waypoints_now]
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
Request request = new Request.Builder()
  .url("https://maps.googleapis.com/maps/api/directions/json?origin=Boston, MA&destination=Concord, MA&waypoints=via:Charlestown,MA|via:Lexington,MA&departure_time=now&key=YOUR_API_KEY")
  .method("GET", null)
  .build();
Response response = client.newCall(request).execute();
// [END maps_http_directions_boston_concord_waypoints_now]
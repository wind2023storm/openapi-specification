// [START maps_http_directions_side_of_road]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/directions/json?origin=37.7680296%2C-122.4375126&destination=side_of_road%3A37.7663444%2C-122.4412006&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_directions_side_of_road]
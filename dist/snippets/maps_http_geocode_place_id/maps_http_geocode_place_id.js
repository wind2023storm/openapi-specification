// [START maps_http_geocode_place_id]
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/geocode/json?place_id=ChIJd8BlQ2BZwokRAFUEcm_qrcA&key=YOUR_API_KEY',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

// [END maps_http_geocode_place_id]
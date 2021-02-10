<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_GeolocationV1GeolocatePostResponseBody] -->
<h3 class="schema-object" id="GeolocationV1GeolocatePostResponseBody">GeolocationV1GeolocatePostResponseBody</h3>

type: `object`

| Field      | Required     | Type                                            | Description                                                                                                                        |
| :--------- | ------------ | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `location` | **required** | [LatLngLiteral](#LatLngLiteral "LatLngLiteral") | The user’s estimated latitude and longitude, in degrees. See [LatLngLiteral](#LatLngLiteral "LatLngLiteral") for more information. |
| `accuracy` | **required** | number                                          | The accuracy of the estimated location, in meters. This represents the radius of a circle around the given `location`.             |

<!--- [END maps_http_schema_GeolocationV1GeolocatePostResponseBody] -->
<!--- This is a generated file, do not edit! -->
<!--- [START maps_http_schema_directionsleg] -->
<h3 class="schema-object" id="DirectionsLeg">Directions Leg</h3>

type: `object`

| Field                 | Required | Type                                                                    | Description                                                                                                                                                        |
| :-------------------- | -------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `distance`            | optional | [TextValueObject](#TextValueObject "TextValueObject")                   | <div class="ref-property-description"><p>Distance of the leg.</p><p>See <a href="#TextValueObject">TextValueObject</a> for more information.</div>                 |
| `duration`            | optional | [TextValueObject](#TextValueObject "TextValueObject")                   | <div class="ref-property-description"><p>Duration of the leg.</p><p>See <a href="#TextValueObject">TextValueObject</a> for more information.</div>                 |
| `end_address`         | optional | string                                                                  | <div class="nonref-property-description"><p>The end address of the leg.</p></div>                                                                                  |
| `end_location`        | optional | [LatLngLiteral](#LatLngLiteral "LatLngLiteral")                         | <div class="ref-property-description"><p>The end location of the leg.</p><p>See <a href="#LatLngLiteral">LatLngLiteral</a> for more information.</div>             |
| `html_instructions`   | optional | string                                                                  | <div class="nonref-property-description"><p>Formatted instructions for the leg</p></div>                                                                           |
| `polyline`            | optional |                                                                         | <div class="nonref-property-description"><p>TODO</p></div>                                                                                                         |
| `start_address`       | optional | string                                                                  | <div class="nonref-property-description"><p>The start address of the leg.</p></div>                                                                                |
| `start_location`      | optional | [LatLngLiteral](#LatLngLiteral "LatLngLiteral")                         | <div class="ref-property-description"><p>The start location of the leg.</p><p>See <a href="#LatLngLiteral">LatLngLiteral</a> for more information.</div>           |
| `steps`               | optional | Array&lt;[DirectionsStep](#DirectionsStep "DirectionsStep")&gt;         | <div class="ref-property-description"><p>Individual steps that make up the leg.</p><p>See <a href="#DirectionsStep">DirectionsStep</a> for more information.</div> |
| `traffic_speed_entry` | optional |                                                                         | <div class="nonref-property-description"><p>TODO</p></div>                                                                                                         |
| `travel_mode`         | optional | [TravelMode](#TravelMode "TravelMode")                                  | <div class="ref-property-description"><p>The mode of travel for the leg.</p><p>See <a href="#TravelMode">TravelMode</a> for more information.</div>                |
| `via_waypoint`        | optional | [DirectionsViaWaypoint](#DirectionsViaWaypoint "DirectionsViaWaypoint") | See [DirectionsViaWaypoint](#DirectionsViaWaypoint "DirectionsViaWaypoint") for more information.                                                                  |

<!--- [END maps_http_schema_directionsleg] -->
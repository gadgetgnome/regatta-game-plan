export function msToKnots(speed) {
  return speed / 0.514444444;
}
export function knotsToMs(speed) {
  return speed * 0.514444444;
}

export function grabInstant(data, dateTime) {
  var timeDate = new Date(dateTime);

  var closestForecast = data.properties.timeseries[0];
  var smallestDiff = Number.MAX_VALUE;

  data.properties.timeseries.forEach((t) => {
    var tempDate = new Date(t.time);
    var diff = Math.abs(tempDate.getTime() - timeDate.getTime());
    if (diff < smallestDiff) {
      closestForecast = t;
      smallestDiff = diff;
    }
  });
  console.log("grabInstant for date" + timeDate);

  if (closestForecast) {
    return {
      ...closestForecast.data.instant.details,
      dateTime: closestForecast.time,
    };
  } else {
    return {};
  }
  console.log(closestForecast);
  return data.properties.toString(); //[instant.wind_speed, instant.wind_from_direction]
}

// "instant": {
//     "details": {
//       "air_pressure_at_sea_level": 1010.4,
//       "air_temperature": 18.2,
//       "air_temperature_percentile_10": 17.5,
//       "air_temperature_percentile_90": 19,
//       "cloud_area_fraction": 98.6,
//       "cloud_area_fraction_high": 98.2,
//       "cloud_area_fraction_low": 13.3,
//       "cloud_area_fraction_medium": 0,
//       "dew_point_temperature": 12.4,
//       "fog_area_fraction": 0,
//       "relative_humidity": 57.8,
//       "ultraviolet_index_clear_sky": 4.5,
//       "wind_from_direction": 221.2,
//       "wind_speed": 2.1,
//       "wind_speed_of_gust": 5.5,
//       "wind_speed_percentile_10": 2,
//       "wind_speed_percentile_90": 4.8
//     }

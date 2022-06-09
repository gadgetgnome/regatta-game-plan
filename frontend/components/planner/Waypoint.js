import { Td, Tr } from "@chakra-ui/react";
import useMetWeather from "../../hooks/useMetWeather";
import useMetWeatherAtTime from "../../hooks/useMetWeatherAtTime";
import { calcCrowDistance, calcCourse } from "../../utils/geo";

export default function Waypoint({ waypoint, index, nextWaypoint }) {
  const weatherData = useMetWeather(waypoint.lat, waypoint.lon);
  const weaterDataAtTime = useMetWeatherAtTime(weatherData, waypoint.dateTime);
  let distance;

  if (nextWaypoint) {
    distance = calcCrowDistance(waypoint, nextWaypoint);
    const speed = 4;
    nextWaypoint.dateTime = new Date(
      waypoint.dateTime.getTime() + (distance / speed) * 3600000
    );
  }

  return (
    <Tr>
      <Td>{waypoint.name}</Td>
      <Td isNumeric>{waypoint.lat.toFixed(3)}</Td>
      <Td isNumeric>{waypoint.lon.toFixed(3)}</Td>
      <Td isNumeric>
        {nextWaypoint && calcCourse(waypoint, nextWaypoint).toFixed(0)}
      </Td>
      <Td isNumeric>{nextWaypoint && distance.toFixed(1)}</Td>
      <Td isNumeric>
        {Boolean(waypoint.dateTime) &&
          waypoint.dateTime.toLocaleTimeString("nb-NO")}
      </Td>
      {weaterDataAtTime && (
        <>
          <Td isNumeric>
            {weaterDataAtTime.wind_speed.toFixed(1)} (
            {weaterDataAtTime.wind_speed_of_gust})
          </Td>
          <Td isNumeric>{weaterDataAtTime.wind_from_direction.toFixed(0)}</Td>
        </>
      )}
    </Tr>
  );
}

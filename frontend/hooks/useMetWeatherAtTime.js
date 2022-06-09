import { useState, useEffect } from "react";
import { grabInstant } from "../utils/weather";

export default function useMetWeatherAtTime(weatherData, dateTime) {
  const [data, setData] = useState();

  useEffect(() => {
    if (weatherData && dateTime) setData(grabInstant(weatherData, dateTime));
  }, [weatherData, dateTime]);

  return data;
}

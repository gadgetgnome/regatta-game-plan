import { useState, useEffect } from "react";

export default function useMetWeather(lat, lon) {
  const [data, setData] = useState();

  useEffect(() => {
    const grabForecast = async (lat, lon) => {
      const url =
        "https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=" +
        lat.toFixed(15) +
        "&lon=" +
        lon.toFixed(15);

      try {
        var response = await fetch(url);
      } catch (e) {
        console.error(e);
        return 0;
      }
      const data = await response.json();
      setData(data);
    };

    grabForecast(lat, lon);
  }, [lat, lon]);

  return data;
}

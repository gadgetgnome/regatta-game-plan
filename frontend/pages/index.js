import Image from "next/image";
import { useState } from "react";
import Header from "../components/header/Header";
import Planner from "../components/planner/Planner";

export default function Home() {
  const [route, setRoute] = useState([
    {
      name: "Aker brygge",
      lat: 59.906,
      lon: 10.729,
      dateTime: new Date(2020, 5, 10, 15, 40),
    },
    { name: "Midtmerke Nesoddtangen", lat: 59.875, lon: 10.647 },
    { name: "Gåsungene", lat: 59.84, lon: 10.586 },
    // { name: "50% til Nærsnes fra Gåsungene", lat: 59.806, lon: 10.551 },
    { name: "Runding Nærsnes", lat: 59.772, lon: 10.517 },
    { name: "Syvest for Aspond (Øst Håøya)", lat: 59.72, lon: 10.571 },
    { name: "Utgang Drøbaksundet Øst", lat: 59.673, lon: 10.557 },
    // { name: "50% Drøbak / Filtvet", lat: 59.626, lon: 10.543 },
    { name: "Filtvet", lat: 59.579, lon: 10.529 },
    // { name: "50% Filtvet Gullholmen", lat: 59.532, lon: 10.516 },
    { name: "Mølen", lat: 59.485, lon: 10.502 },
    // { name: "50%", lat: 59.323, lon: 10.564 },
    { name: "Hollenderbaen", lat: 59.161, lon: 10.626 },
    // { name: "50%", lat: 59.201, lon: 10.55 },
    { name: "Husøy", lat: 59.24, lon: 10.474 },
  ]);

  return (
    <div>
      <Header />
      {route && <Planner route={route} />}
    </div>
  );
}

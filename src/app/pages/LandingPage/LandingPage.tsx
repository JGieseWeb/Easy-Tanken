import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import TankCard from "../../components/TankCard/TankCard";
import styles from "./LandingPage.module.css";
import { Station } from "../../../Server/types";

function LandingPage(): JSX.Element {
  const { search } = useLocation();

  const [stations, setStations] = useState<Station[]>([]);

  useEffect(() => {
    async function fetchStations() {
      const response = await fetch(`/api/list${search}`);
      const stations = await response.json();
      setStations(stations);
    }
    fetchStations();
  }, []);

  return (
    <div className={styles.container}>
      <header>
        <NavBar />
      </header>
      <main className={styles.main}>
        {stations.map((station, index) => (
          <TankCard
            key={station.id}
            tankName={station.name}
            variant={index === 0 ? "primary" : "secondary"}
          />
        ))}
      </main>
    </div>
  );
}
export default LandingPage;

import React, { useState } from "react";
import Filter from "../../components/Filter/Filter";
import MaxResultCard from "../../components/MaxResultCard/MaxResultCard";
import LocationCard from "../../components/LocationCard/LocationCard";
import NavBar from "../../components/NavBar/NavBar";
import RadiusCard from "../../components/Radius/Radius";
import SpritCard from "../../components/Spritcard/SpritCard";
import styles from "./SettingsPage.module.css";

function SettingsPage(): JSX.Element {
  const [plz, setPlz] = useState("");
  return (
    <div className={styles.container}>
      <header>
        <NavBar isLabelHidden />
      </header>
      <main>
        <Filter />
        <LocationCard
          label="Umkreissuche um Plz"
          placeholder="Plz"
          value={plz}
          type="number"
          onChange={setPlz}
        />
        <RadiusCard />
        <SpritCard />
        <MaxResultCard />
      </main>
    </div>
  );
}
export default SettingsPage;

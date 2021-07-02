import React, { useState } from "react";
import Filter from "../../components/Filter/Filter";
import MaxResultCard from "../../components/MaxResultCard/MaxResultCard";
import LocationCard from "../../components/LocationCard/LocationCard";
import RadiusCard from "../../components/Radius/Radius";
import SpritCard from "../../components/Spritcard/SpritCard";
import styles from "./SettingsPage.module.css";
import NavBarSettings from "../../components/NavBarSettings/NavBarSettings";

function SettingsPage(): JSX.Element {
  const [postcode, setPostcode] = useState("");
  const [filterValue, setFilterValue] = useState<"all" | "favorites">("all");
  const [spritValue, setSpritValue] = useState<"e5" | "e10" | "diesel">("e5");
  const [radiusValue, setRadiusValue] = useState<5 | 10 | 50>(5);
  const [MaxresultValue, setMaxResultValue] = useState<
    "max25" | "max50" | "allResults"
  >("max25");

  return (
    <div className={styles.container}>
      <header>
        <NavBarSettings isLabelHidden />
      </header>
      <main>
        <Filter value={filterValue} onChange={setFilterValue} />
        <LocationCard
          label="Umkreissuche um Plz"
          placeholder="Plz"
          value={postcode}
          type="number"
          onChange={setPostcode}
        />
        <RadiusCard value={radiusValue} onChange={setRadiusValue} />
        <SpritCard value={spritValue} onChange={setSpritValue} />
        <MaxResultCard value={MaxresultValue} onChange={setMaxResultValue} />
      </main>
    </div>
  );
}
export default SettingsPage;

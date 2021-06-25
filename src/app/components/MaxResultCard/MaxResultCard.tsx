import React, { useState } from "react";
import styles from "./MaxResultCard.module.css";

const pickMax = {
  max25: { name: "max.25" },
  max50: { name: "max.50" },
  allResults: { name: "Alle Ergebnisse" },
};

function MaxResultCard(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [maxResultValue, setMaxResultValue] = useState<
    "max25" | "max50" | "allResults"
  >("max25");

  return (
    <div className={styles.maxResultBar}>
      <div
        className={styles.maxResultBar__header}
        onClick={() => setOpen(!open)}
      >
        <p>Anzahl Ergebnisse</p>
        <label className={styles.label}>{pickMax[maxResultValue].name}</label>
      </div>
      {open && (
        <div className={styles.maxResultBar__filters}>
          <label htmlFor="max25">max.25</label>
          <input
            type="radio"
            id="max25"
            name="filter"
            value="max25"
            onChange={() => setMaxResultValue("max25")}
          />
          <label htmlFor="max50">max.50</label>
          <input
            type="radio"
            id="max50"
            name="filter"
            value="max50"
            onChange={() => setMaxResultValue("max50")}
          />
          <label htmlFor="allResults">Alle Ergebnisse</label>
          <input
            type="radio"
            id="allResults"
            name="filter"
            value="allResults"
            onChange={() => setMaxResultValue("allResults")}
          />
        </div>
      )}
    </div>
  );
}
export default MaxResultCard;

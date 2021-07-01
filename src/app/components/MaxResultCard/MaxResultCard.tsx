import React, { useState } from "react";
import styles from "./MaxResultCard.module.css";

const pickMax = {
  max25: "max.25",
  max50: "max.50",
  allResults: "Alle Ergebnisse",
};
type MaxResultCardProps = {
  value: "max25" | "max50" | "allResults";
  onChange: (value: "max25" | "max50" | "allResults") => void;
};
function MaxResultCard({ value, onChange }: MaxResultCardProps): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.maxResultBar}>
      <div
        className={styles.maxResultBar__header}
        onClick={() => setOpen(!open)}
      >
        <p>Anzahl Ergebnisse</p>
        <label className={styles.label}>{pickMax[value]}</label>
      </div>
      {open && (
        <div className={styles.maxResultBar__filters}>
          <label htmlFor="max25">max.25</label>
          <input
            type="radio"
            id="max25"
            name="filter"
            value="max25"
            onChange={() => onChange("max25")}
          />
          <label htmlFor="max50">max.50</label>
          <input
            type="radio"
            id="max50"
            name="filter"
            value="max50"
            onChange={() => onChange("max50")}
          />
          <label htmlFor="allResults">Alle Ergebnisse</label>
          <input
            type="radio"
            id="allResults"
            name="filter"
            value="allResults"
            onChange={() => onChange("allResults")}
          />
        </div>
      )}
    </div>
  );
}
export default MaxResultCard;

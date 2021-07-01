import React, { useState } from "react";
import styles from "./Radius.module.css";

const radiusLabels = {
  five: "5Km",
  ten: "10Km",
  fifty: "50Km",
};

type RadiusCardProps = {
  value: "five" | "ten" | "fifty";
  onChange: (value: "five" | "ten" | "fifty") => void;
};

function RadiusCard({ value, onChange }: RadiusCardProps): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.radiusBar}>
      <div className={styles.radiusBar__header} onClick={() => setOpen(!open)}>
        <p>max.Such-Radius</p>
        <label className={styles.label}>{radiusLabels[value]}</label>
      </div>
      {open && (
        <div className={styles.radiusBar__filters}>
          <label htmlFor="5Km">5Km</label>
          <input
            type="radio"
            id="5km"
            name="filter"
            value="five"
            onChange={() => onChange("five")}
          />
          <label htmlFor="10Km">10Km</label>
          <input
            type="radio"
            id="10Km"
            name="filter"
            value="ten"
            onChange={() => onChange("ten")}
          />
          <label htmlFor="50Km">50Km</label>
          <input
            type="radio"
            id="50Km"
            name="filter"
            value="fifty"
            onChange={() => onChange("fifty")}
          />
        </div>
      )}
    </div>
  );
}
export default RadiusCard;

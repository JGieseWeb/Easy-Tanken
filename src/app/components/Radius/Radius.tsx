import React, { useState } from "react";
import styles from "./Radius.module.css";

const pickRadius = {
  five: { name: "5Km", value: 5 },
  ten: { name: "10Km", value: 10 },
  fifty: { name: "50Km", value: 50 },
};

function RadiusCard(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [RadiusValue, setRadiusValue] = useState<"five" | "ten" | "fifty">(
    "five"
  );

  return (
    <div className={styles.radiusBar}>
      <div className={styles.radiusBar__header} onClick={() => setOpen(!open)}>
        <p>max.Such-Radius</p>
        <label className={styles.label}>{pickRadius[RadiusValue].name}</label>
      </div>
      {open && (
        <div className={styles.radiusBar__filters}>
          <label htmlFor="5Km">5Km</label>
          <input
            type="radio"
            id="five"
            name="filter"
            value="five"
            onChange={() => setRadiusValue("five")}
          />
          <label htmlFor="10Km">10Km</label>
          <input
            type="radio"
            id="ten"
            name="filter"
            value="ten"
            onChange={() => setRadiusValue("ten")}
          />
          <label htmlFor="50Km">50Km</label>
          <input
            type="radio"
            id="fifty"
            name="filter"
            value="fifty"
            onChange={() => setRadiusValue("fifty")}
          />
        </div>
      )}
    </div>
  );
}
export default RadiusCard;

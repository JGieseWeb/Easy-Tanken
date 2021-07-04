import React, { useState } from "react";
import styles from "./Radius.module.css";

const radiusLabels = {
  5: "5Km",
  10: "10Km",
  50: "50Km",
};

type RadiusCardProps = {
  value: 5 | 10 | 50;
  onChange: (value: 5 | 10 | 50) => void;
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
            value={5}
            onChange={() => onChange(5)}
          />
          <label htmlFor="10Km">10Km</label>
          <input
            type="radio"
            id="10Km"
            name="filter"
            value={10}
            onChange={() => onChange(10)}
          />
          <label htmlFor="50Km">50Km</label>
          <input
            type="radio"
            id="50Km"
            name="filter"
            value={50}
            onChange={() => onChange(50)}
          />
        </div>
      )}
    </div>
  );
}
export default RadiusCard;

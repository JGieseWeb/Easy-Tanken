import React, { useState } from "react";
import styles from "./SpritCard.module.css";

const spritSort = {
  e5: "e5",
  e10: "e10",
  diesel: "Diesel",
};
type SpritCardProps = {
  value: "e5" | "e10" | "diesel";
  onChange: (value: "e5" | "e10" | "diesel") => void;
};
function SpritCard({ value, onChange }: SpritCardProps): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.spritBar}>
      <div className={styles.spritBar__header} onClick={() => setOpen(!open)}>
        <p>Filter</p>
        <label className={styles.label}>{spritSort[value]}</label>
      </div>
      {open && (
        <div className={styles.spritBar__filters}>
          <label htmlFor="e5">e5</label>
          <input
            type="radio"
            id="e5"
            name="filter"
            value="e5"
            onChange={() => onChange("e5")}
          />
          <label htmlFor="e10">e10</label>
          <input
            type="radio"
            id="e10"
            name="filter"
            value="e10"
            onChange={() => onChange("e10")}
          />
          <label htmlFor="diesel">Diesel</label>
          <input
            type="radio"
            id="diesel"
            name="filter"
            value="diesel"
            onChange={() => onChange("diesel")}
          />
        </div>
      )}
    </div>
  );
}
export default SpritCard;

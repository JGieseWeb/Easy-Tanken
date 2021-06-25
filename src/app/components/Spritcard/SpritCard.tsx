import React, { useState } from "react";
import styles from "./SpritCard.module.css";

const spritSort = {
  e5: { name: "e5" },
  e10: { name: "e10" },
  diesel: { name: "Diesel" },
};

function SpritCard(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [spritValue, setSpritValue] = useState<"e5" | "e10" | "diesel">("e5");

  return (
    <div className={styles.spritBar}>
      <div className={styles.spritBar__header} onClick={() => setOpen(!open)}>
        <p>Filter</p>
        <label className={styles.label}>{spritSort[spritValue].name}</label>
      </div>
      {open && (
        <div className={styles.spritBar__filters}>
          <label htmlFor="e5">e5</label>
          <input
            type="radio"
            id="e5"
            name="filter"
            value="e5"
            onChange={() => setSpritValue("e5")}
          />
          <label htmlFor="e10">e10</label>
          <input
            type="radio"
            id="e10"
            name="filter"
            value="e10"
            onChange={() => setSpritValue("e10")}
          />
          <label htmlFor="diesel">Diesel</label>
          <input
            type="radio"
            id="diesel"
            name="filter"
            value="diesel"
            onChange={() => setSpritValue("diesel")}
          />
        </div>
      )}
    </div>
  );
}
export default SpritCard;

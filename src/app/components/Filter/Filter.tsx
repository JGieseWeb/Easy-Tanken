import React, { useState } from "react";
import styles from "./Filter.module.css";

type FilterProps = {
  value: "all" | "favorites";
  onChange: (value: "all" | "favorites") => void;
};
function Filter({ value, onChange }: FilterProps): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterBar__header} onClick={() => setOpen(!open)}>
        <p>Filter</p>
        <label className={styles.label}>
          {value === "all" ? "Alle" : "Favoriten"}
        </label>
      </div>
      {open && (
        <div className={styles.filterBar__filters}>
          <label htmlFor="all">Alle</label>
          <input
            type="radio"
            id="all"
            name="filter"
            value="all"
            onChange={() => onChange("all")}
          />
          <label htmlFor="favorites">Favoriten</label>
          <input
            type="radio"
            id="favorites"
            name="filter"
            value="favorites"
            onChange={() => onChange("favorites")}
          />
        </div>
      )}
    </div>
  );
}
export default Filter;

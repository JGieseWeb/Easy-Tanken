import React, { useState } from "react";
import styles from "./Filter.module.css";

const filters = { all: { name: "Alle" }, favorites: { name: "Favoriten" } };

function Filter(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [filterValue, setFilterValue] = useState<"all" | "favorites">("all");

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterBar__header} onClick={() => setOpen(!open)}>
        <p>Filter</p>
        <label className={styles.label}>{filters[filterValue].name}</label>
      </div>
      {open && (
        <div className={styles.filterBar__filters}>
          <label htmlFor="all">Alle</label>
          <input
            type="radio"
            id="all"
            name="filter"
            value="all"
            onChange={() => setFilterValue("all")}
          />
          <label htmlFor="favorites">Favoriten</label>
          <input
            type="radio"
            id="favorites"
            name="filter"
            value="favorites"
            onChange={() => setFilterValue("favorites")}
          />
        </div>
      )}
    </div>
  );
}
export default Filter;

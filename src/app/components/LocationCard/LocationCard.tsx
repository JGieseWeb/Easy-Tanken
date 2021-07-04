import React, { useState } from "react";
import styles from "./LocationCard.module.css";

type LabeledInputProps = {
  label: string;
  placeholder: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function LocationCard({
  label,
  placeholder,
  value,
  type,
  required,
  onChange,
}: LabeledInputProps): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.locationBar}>
      <div
        className={styles.locationBar__header}
        onClick={() => setOpen(!open)}
      >
        <p>Suchmethode</p>
        <label className={styles.label}>
          {value ? value : "Aktueller Standort"}
        </label>
      </div>
      {open && (
        <div className={styles.locationBar__filters}>
          <label htmlFor="Aktueller Standort">Aktueller Standort</label>
          <input
            type="radio"
            id="AkLocation"
            name="filter"
            value="AkLocation"
            checked={!value}
            onChange={() => onChange("")}
          />
          <label className={styles.container__label}>{label}</label>
          <input
            className={styles.container__input}
            placeholder={`${placeholder}`}
            name="filter"
            type={type}
            value={value}
            required={required}
            onChange={(event) => onChange(event.target.value)}
          />
        </div>
      )}
    </div>
  );
}
export default LocationCard;

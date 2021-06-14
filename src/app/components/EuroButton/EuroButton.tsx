import React from "react";
import EuroIcon from "../Icons/EuroIcon";
import styles from "./EuroButton.module.css";

function EuroButton(): JSX.Element {
  return (
    <button className={styles.euroButton}>
      <EuroIcon />
    </button>
  );
}
export default EuroButton;

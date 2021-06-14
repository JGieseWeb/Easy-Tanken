import React from "react";
import KmIcon from "../Icons/KmIcon";
import styles from "./KmButton.module.css";

function KMButton(): JSX.Element {
  return (
    <button className={styles.kmButton}>
      <KmIcon />
    </button>
  );
}
export default KMButton;

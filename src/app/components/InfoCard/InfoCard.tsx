import React from "react";
import styles from "./InfoCard.module.css";

export default function InfoCard(): JSX.Element {
  return (
    <div className={styles.infoCard}>
      <div className={styles.tankName}>Aral</div>
      <div className={styles.street}>Wegstraße 12</div>
      <div className={styles.place}>Mülheim a. d Ruhr 45481</div>
      <div className={styles.range}>2,1</div>
    </div>
  );
}

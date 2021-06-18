import React from "react";
import styles from "./PrizeField.module.css";

export type PrizeFieldProps = {
  variant: "primary" | "secondary";
};

export default function PrizeField({ variant }: PrizeFieldProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={`${styles.prize} ${styles[`${variant}__prize`]}`}>
        1.60
      </div>
      <div className={`${styles.bar} ${styles[`${variant}__bar`]}`}></div>
    </div>
  );
}

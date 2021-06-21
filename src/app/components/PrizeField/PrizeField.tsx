import React from "react";
import styles from "./PrizeField.module.css";

export type PrizeFieldProps = {
  variant: "primary" | "secondary";
  prize: number;
};

export default function PrizeField({
  variant,
  prize,
}: PrizeFieldProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={`${styles.prize} ${styles[`${variant}__prize`]}`}>
        {prize}
      </div>
      <div className={`${styles.bar} ${styles[`${variant}__bar`]}`}></div>
    </div>
  );
}

import React from "react";
import styles from "./PrizeField.module.css";

type PrizeFieldProps = {
  variant: "Primary" | "Secondary";
};

export default function PrizeField({ variant }: PrizeFieldProps): JSX.Element {
  return (
    <div className={styles[variant]}>
      <div className={styles[`${variant}__prize`]}>1.60</div>
      <div className={styles[`${variant}__bar`]}></div>
    </div>
  );
}

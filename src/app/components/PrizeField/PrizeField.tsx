import React from "react";
import styles from "./PrizeField.module.css";

type PrizeFieldProps = {
  variant: "Primary" | "Secondary";
};

export default function PrizeField({ variant }: PrizeFieldProps): JSX.Element {
  return <div className={styles[variant]}>1.60</div>;
}

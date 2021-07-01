import React from "react";
import styles from "./PriceField.module.css";

export type PriceFieldProps = {
  variant: "primary" | "secondary";
  price: number;
};

export default function PriceField({
  variant,
  price,
}: PriceFieldProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={`${styles.price} ${styles[`${variant}__price`]}`}>
        {price}
      </div>
      <div className={`${styles.bar} ${styles[`${variant}__bar`]}`} />
    </div>
  );
}

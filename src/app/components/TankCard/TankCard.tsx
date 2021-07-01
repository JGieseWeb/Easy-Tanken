import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import PriceField from "../PriceField/PriceField";
import styles from "./TankCard.module.css";

type TankCardProps = {
  brand: string;
  variant: "primary" | "secondary";
  dist: number;
  street: string;
  place: string;
  price: number;
};

export default function TankCard({
  brand,
  variant,
  dist,
  street,
  place,
  price,
}: TankCardProps): JSX.Element {
  return (
    <div className={styles.tankCard}>
      <PriceField variant={variant} price={price} />
      <InfoCard brand={brand} street={street} place={place} dist={dist} />
    </div>
  );
}

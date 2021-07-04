import React from "react";
import styles from "./InfoCard.module.css";

export type InfoCardProps = {
  brand: string;
  street: string;
  place: string;
  dist: number;
};
export default function InfoCard({
  brand,
  street,
  place,
  dist,
}: InfoCardProps): JSX.Element {
  return (
    <div className={styles.infoCard}>
      <div className={styles.tankName}>{brand}</div>
      <div className={styles.street}>{street}</div>
      <div className={styles.place}>{place}</div>
      <div className={styles.range}>{dist} km</div>
    </div>
  );
}

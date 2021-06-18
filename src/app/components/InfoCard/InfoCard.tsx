import React from "react";
import styles from "./InfoCard.module.css";

export type InfoCardProps = {
  tankName: string;
  street: string;
  place: string;
  range: string;
};
export default function InfoCard({
  tankName,
  street,
  place,
  range,
}: InfoCardProps): JSX.Element {
  return (
    <div className={styles.infoCard}>
      <div className={styles.tankName}>{tankName}</div>
      <div className={styles.street}>{street}</div>
      <div className={styles.place}>{place}</div>
      <div className={styles.range}>{range}</div>
    </div>
  );
}

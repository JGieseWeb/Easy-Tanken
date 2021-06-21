import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import PrizeField from "../PrizeField/PrizeField";
import styles from "./TankCard.module.css";

type TankCardProps = {
  tankName: string;
  variant: "primary" | "secondary";
};

export default function TankCard({
  tankName,
  variant,
}: TankCardProps): JSX.Element {
  return (
    <div className={styles.tankCard}>
      <PrizeField variant={variant} prize={160} />
      <InfoCard
        tankName={tankName}
        street="Webstraße 12"
        place="Mülheim a. d Ruhr 45481"
        range="2,1"
      />
    </div>
  );
}

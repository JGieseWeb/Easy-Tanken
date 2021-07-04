import React from "react";
import TankCard from "./TankCard";

export default {
  title: "Component/TankCard",
  component: TankCard,
};
export const AralCheap = (): JSX.Element => (
  <TankCard
    brand="Aral"
    variant="primary"
    dist={2}
    street="Mülheimerstr.123"
    place="Mülheim"
    price={1.56}
  />
);
export const EssoExpensive = (): JSX.Element => (
  <TankCard
    brand="Esso"
    variant="secondary"
    dist={2.3}
    street="Mülheimerstr.123"
    place="Mülheim"
    price={1.58}
  />
);

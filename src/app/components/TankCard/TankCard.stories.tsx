import React from "react";
import TankCard from "./TankCard";

export default {
  title: "Component/TankCard",
  component: TankCard,
};
export const AralCheap = (): JSX.Element => (
  <TankCard tankName="Aral" variant="primary" />
);
export const EssoExpensive = (): JSX.Element => (
  <TankCard tankName="Esso" variant="secondary" />
);

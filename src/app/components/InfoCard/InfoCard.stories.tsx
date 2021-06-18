import React from "react";
import InfoCard from "./InfoCard";

export default {
  title: "Component/InfoCard",
  component: InfoCard,
};
export const Aral = (): JSX.Element => (
  <InfoCard
    tankName="Aral"
    street="Webstraße 12"
    place="Mülheim a. d Ruhr 45481"
    range="2,1"
  />
);
export const Esso = (): JSX.Element => (
  <InfoCard tankName="Esso" street="Webstraße 13" place="Köln" range="1,1" />
);

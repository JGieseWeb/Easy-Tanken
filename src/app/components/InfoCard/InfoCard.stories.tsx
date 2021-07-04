import React from "react";
import InfoCard from "./InfoCard";

export default {
  title: "Component/InfoCard",
  component: InfoCard,
};
export const Aral = (): JSX.Element => (
  <InfoCard
    brand="Aral"
    street="Webstraße 12"
    place="Mülheim a. d Ruhr 45481"
    dist={2.1}
  />
);
export const Esso = (): JSX.Element => (
  <InfoCard brand="Esso" street="Webstraße 13" place="Köln" dist={2.5} />
);

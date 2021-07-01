import React from "react";

import RadiusCard from "./Radius";

export default {
  title: "Component/RadiusCard",
  component: RadiusCard,
};

export const Radius = (): JSX.Element => (
  <RadiusCard value="fifty" onChange={console.log} />
);

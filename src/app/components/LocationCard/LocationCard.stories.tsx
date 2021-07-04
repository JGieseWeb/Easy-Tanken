import React from "react";

import LocationCard from "./LocationCard";

export default {
  title: "Component/LocationCard",
  component: LocationCard,
};

export const Location = (): JSX.Element => (
  <LocationCard
    label="Umkreissuche um PLZ"
    placeholder="Plz"
    value=""
    onChange={console.log}
  />
);

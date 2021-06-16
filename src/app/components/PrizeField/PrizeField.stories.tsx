import React from "react";
import PrizeField from "./PrizeField";

export default {
  title: "Component/PrizeField",
  component: PrizeField,
};
export const FirstPrizeField = (): JSX.Element => (
  <PrizeField variant="Primary" />
);
export const SecondaryPrizeField = (): JSX.Element => (
  <PrizeField variant="Secondary" />
);

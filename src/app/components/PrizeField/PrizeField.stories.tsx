import React from "react";
import PrizeField from "./PrizeField";

export default {
  title: "Component/PrizeField",
  component: PrizeField,
};
export const FirstPrizeField = (): JSX.Element => (
  <PrizeField variant="primary" prize={1.61} />
);
export const SecondaryPrizeField = (): JSX.Element => (
  <PrizeField variant="secondary" prize={1.62} />
);

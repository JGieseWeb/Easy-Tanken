import React from "react";
import PriceField from "./PriceField";

export default {
  title: "Component/PriceField",
  component: PriceField,
};
export const FirstPriceField = (): JSX.Element => (
  <PriceField variant="primary" price={1.61} />
);
export const SecondaryPriceField = (): JSX.Element => (
  <PriceField variant="secondary" price={1.62} />
);

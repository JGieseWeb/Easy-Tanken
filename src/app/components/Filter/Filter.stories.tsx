import React from "react";

import Filter from "./Filter";

export default {
  title: "Component/Filter",
  component: Filter,
};

export const FilterBar = (): JSX.Element => (
  <Filter value="all" onChange={console.log} />
);

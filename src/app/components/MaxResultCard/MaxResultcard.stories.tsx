import React from "react";

import MaxResultCard from "./MaxResultCard";

export default {
  title: "Component/MaxResultCard",
  component: MaxResultCard,
};

export const MaxResult = (): JSX.Element => (
  <MaxResultCard value="max25" onChange={console.log} />
);

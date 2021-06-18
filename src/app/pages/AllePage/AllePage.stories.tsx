import React from "react";
import AllePage from "./AllePage";

export default {
  title: "pages/AllePage",
  component: AllePage,
  parameters: {
    layout: "fullscreen",
  },
};
export const Default = (): JSX.Element => <AllePage />;

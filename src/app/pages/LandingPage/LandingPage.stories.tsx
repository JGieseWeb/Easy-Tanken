import React from "react";
import LandingPage from "./LandingPage";

export default {
  title: "pages/LandingPage",
  component: LandingPage,
  parameters: {
    layout: "fullscreen",
  },
};
export const Default = (): JSX.Element => <LandingPage />;

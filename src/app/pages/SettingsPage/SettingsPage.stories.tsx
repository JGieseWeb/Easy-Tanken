import React from "react";
import SettingsPage from "./SettingsPage";

export default {
  title: "pages/SettingsPage",
  component: SettingsPage,
  parameters: {
    layout: "fullscreen",
  },
};
export const Setting = (): JSX.Element => <SettingsPage />;

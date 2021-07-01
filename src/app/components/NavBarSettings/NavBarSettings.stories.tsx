import React from "react";
import NavBarSettings from "./NavBarSettings";

export default {
  title: "Component/NavBarSettings",
  component: NavBarSettings,
};
export const NavBarSettingsElement = (): JSX.Element => <NavBarSettings />;

export const LabelsHiddenSettings = (): JSX.Element => (
  <NavBarSettings isLabelHidden />
);

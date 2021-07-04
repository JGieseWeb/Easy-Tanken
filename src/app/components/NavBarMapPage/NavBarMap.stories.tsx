import React from "react";
import NavBarMap from "./NavBarMapPage";

export default {
  title: "Component/NavBarMap",
  component: NavBarMap,
};
export const NavBarMapElement = (): JSX.Element => <NavBarMap />;

export const LabelsHiddenMap = (): JSX.Element => <NavBarMap isLabelHidden />;

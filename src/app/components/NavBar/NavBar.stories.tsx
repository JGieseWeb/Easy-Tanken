import React from "react";
import NavBar from "./NavBar";

export default {
  title: "Component/NavBar",
  component: NavBar,
};
export const NavBarElement = (): JSX.Element => <NavBar />;

export const LabelsHidden = (): JSX.Element => <NavBar isLabelHidden />;

import React from "react";
import BurgerMenuIcon from "../Icons/BurgerMenuIcon";
import CompassIcon from "../Icons/CompassIcon";
import NavBarLink from "./NavBarLink";

export default {
  title: "Component/NavBarLink",
  component: NavBarLink,
};
export const BurgerMenu = (): JSX.Element => (
  <NavBarLink icon={<BurgerMenuIcon />} link="#" />
);
export const Compass = (): JSX.Element => (
  <NavBarLink icon={<CompassIcon />} link="#" />
);

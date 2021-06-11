import React from "react";
import BurgerMenuIcon from "../Icons/BurgerMenuIcon";
import NavBarLink from "./NavBarLink";

export default {
  title: "Component/NavBarLink",
  component: NavBarLink,
};
export const BurgerMenu = (): JSX.Element => (
  <NavBarLink icon={<BurgerMenuIcon />} link="#" />
);

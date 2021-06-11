import React from "react";
import BurgerMenuIcon from "../Icons/BurgerMenuIcon";
import CompassIcon from "../Icons/CompassIcon";
import NavBarLink from "../NavBarLink/NavBarLink";
import styles from "./NavBar.module.css";

function NavBar(): JSX.Element {
  return (
    <div className={styles.navBar}>
      <NavBarLink icon={<BurgerMenuIcon />} link="/settings" />
      <NavBarLink icon={<CompassIcon />} link="/map" />
    </div>
  );
}
export default NavBar;

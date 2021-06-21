import React from "react";
import EuroButton from "../EuroButton/EuroButton";
import BurgerMenuIcon from "../Icons/BurgerMenuIcon";
import CompassIcon from "../Icons/CompassIcon";
import KMButton from "../KmButton/KmButton";
import NavBarLink from "../NavBarLink/NavBarLink";
import styles from "./NavBar.module.css";

function NavBar(): JSX.Element {
  return (
    <div className={styles.navBar}>
      <div className={styles.topNavBar}>
        <NavBarLink icon={<BurgerMenuIcon />} link="/settings" />
        <NavBarLink icon={<CompassIcon />} link="/map" />
      </div>
      <div className={styles.botNavBar}>
        <EuroButton />
        <span className={styles.text}>Alle</span>
        <KMButton />
      </div>
    </div>
  );
}
export default NavBar;

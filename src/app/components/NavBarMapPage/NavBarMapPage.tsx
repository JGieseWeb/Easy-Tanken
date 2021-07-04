import React from "react";
import EuroButton from "../EuroButton/EuroButton";
import BackButtonIcon from "../Icons/BackButtonIcon";
import BurgerMenuIcon from "../Icons/BurgerMenuIcon";
import CompassIcon from "../Icons/CompassIcon";
import KMButton from "../KmButton/KmButton";
import NavBarLink from "../NavBarLink/NavBarLink";
import styles from "./NavBarMap.module.css";

export type NavBarProps = {
  isLabelHidden?: boolean;
};

function NavBarMap({ isLabelHidden }: NavBarProps): JSX.Element {
  return (
    <div className={styles.navBar}>
      <div className={styles.topNavBar}>
        {!isLabelHidden && (
          <>
            <NavBarLink icon={<BurgerMenuIcon />} link="/settings" />
            <NavBarLink icon={<CompassIcon />} link="/map" />
          </>
        )}
        <NavBarLink icon={<BackButtonIcon />} link="/" />
      </div>
      <div className={styles.botNavBar}>
        {!isLabelHidden && (
          <>
            <EuroButton />
            <span className={styles.text}>Alle</span>
            <KMButton />
          </>
        )}
      </div>
    </div>
  );
}
export default NavBarMap;

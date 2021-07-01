import React, { useEffect, useState } from "react";
import EuroButton from "../EuroButton/EuroButton";
import BurgerMenuIcon from "../Icons/BurgerMenuIcon";
import CompassIcon from "../Icons/CompassIcon";
import KMButton from "../KmButton/KmButton";
import NavBarLink from "../NavBarLink/NavBarLink";
import styles from "./NavBarSettings.module.css";

export type NavBarProps = {
  isLabelHidden?: boolean;
};

function NavBarSettings({ isLabelHidden }: NavBarProps): JSX.Element {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      });
    }
  }, []);
  return (
    <div className={styles.navBar}>
      <div className={styles.topNavBar}>
        {!isLabelHidden && (
          <>
            <NavBarLink icon={<BurgerMenuIcon />} link="/settings" />
            <NavBarLink icon={<CompassIcon />} link="/map" />
          </>
        )}
        <NavBarLink
          icon={<BurgerMenuIcon />}
          link={`/?lat=${lat}&lng=${lng}`}
        />
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
export default NavBarSettings;

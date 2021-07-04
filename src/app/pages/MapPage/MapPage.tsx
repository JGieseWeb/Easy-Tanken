import React from "react";

import styles from "./MapPage.module.css";
import NavBarMap from "../../components/NavBarMapPage/NavBarMapPage";

function MapPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <header>
        <NavBarMap isLabelHidden />
      </header>
      <main>
        <img className="MapImg" src="dist/app/assets/MapImage.png"></img>
      </main>
    </div>
  );
}
export default MapPage;

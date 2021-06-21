import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import TankCard from "../../components/TankCard/TankCard";
import styles from "./AllePage.module.css";

function LandingPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <header>
        <NavBar />
      </header>
      <main className={styles.main}>
        <TankCard tankName="Aral" variant="primary" />
        <TankCard tankName="Esso" variant="secondary" />
      </main>
    </div>
  );
}
export default LandingPage;

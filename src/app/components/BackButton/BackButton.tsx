import React from "react";
import styles from "./BackButton.module.css";
import { useHistory } from "react-router-dom";
import BackButtonIcon from "../Icons/BackButtonIcon";

function BackButton(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
): JSX.Element {
  const history = useHistory();

  return (
    <button
      className={styles.backButton}
      onClick={() => history.goBack()}
      {...props}
    >
      <BackButtonIcon />
    </button>
  );
}

export default BackButton;

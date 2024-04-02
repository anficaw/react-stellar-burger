import React from "react";
import styles from "./link-login.module.css";
import { Link } from "react-router-dom";

type TLinLoginprops = {
  qwest: string,
  to: string,
  text: string
}

function LinLogin(props:TLinLoginprops) {
  return (
    <div className={styles.newUser}>
      <p className="text text_type_main-default text_color_inactive">
        {props.qwest}
      </p>
      <Link
        to={props.to}
        className={`ml-4 text text_type_main-default text_color_inactive ${styles.linkLogin}`}
      >
        {props.text}
      </Link>
      



    </div>
  );
}

export default LinLogin;

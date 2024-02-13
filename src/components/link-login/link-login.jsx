import React from "react";
import styles from "./link-login.module.css";
import { Link, NavLink } from "react-router-dom";
import { Input,
  Button} from "@ya.praktikum/react-developer-burger-ui-components";



function LinLogin(props) {
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

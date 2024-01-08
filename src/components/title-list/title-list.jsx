import React from "react";
import styles from "./title-list.module.css";

function TitleList(props) {
  return (
    <a className={styles.titleList}>
      <p className="text text_type_main-medium">{props.name}</p>
    </a>
  );
}

export default TitleList;

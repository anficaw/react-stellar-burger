import React from "react";
import styles from "./title-list.module.css";

type TTitleListprops = {
  id: string,
  name: string
}


function TitleList(props:TTitleListprops) {
  return (
    <a className={styles.titleList} id={props.id}>
      <p className="text text_type_main-medium">{props.name}</p>
    </a>
  );
}

export default TitleList;

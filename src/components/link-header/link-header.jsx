import React from "react";
import styles from "./link-header.module.css";

function LinkHeader(props) {
  return (
    <a className={styles.linkHeader}>
      
        <props.icon/>
        <p className='ml-2 text text_type_main-default'>{props.name}</p>
      
    </a>
  );
}

export default LinkHeader;

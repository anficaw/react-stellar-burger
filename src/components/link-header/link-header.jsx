import React from "react";
import styles from "./link-header.module.css";
import { Link, NavLink } from "react-router-dom";



function LinkHeader(props) {
  return (
    <NavLink className={({isActive}) => isActive ? styles.active : styles.linkHeader} 
             to={props.to}>
              {({isActive}) => (
                <props.icon type = "primary"/>)}
      <props.icon type = "secondary"/>
      <p className="ml-2 text text_type_main-default">{props.name}</p>
    </NavLink>
  );
}


export default LinkHeader;

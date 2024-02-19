import React from "react";
import styles from "./link-profile.module.css";
import { Link, NavLink } from "react-router-dom";

type TLinkProfilerops = {
  to: string,
  name: string,
   
}


function LinkProfile(props:TLinkProfilerops) {
  return (
    <NavLink className={({isActive}) => isActive ? styles.active : styles.linkProfile} 
             to={props.to}>      
      <p className="text text_type_main-medium">{props.name}</p>
    </NavLink>
  );
}


export default LinkProfile;

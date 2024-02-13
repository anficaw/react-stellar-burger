import React, { useState }  from "react";
import styles from "./link-header.module.css";
import { Link, NavLink } from "react-router-dom";


function LinkHeader(props) {
  /*const [isActiveNav, setIsActiveNav] = useState(false);
  
const isActiveLink = ({isActive}) => {
    setIsActiveNav(isActive);
    return isActive ? styles.active : styles.linkHeader;
  }
  
  return (
    <NavLink className={isActiveLink} 
             to={props.to}>
             
      <props.icon type = {isActiveNav ? "primary" :  "secondary"}/>
      <p className="ml-2 text text_type_main-default">{props.name}</p>
    </NavLink>
  );
}*/
const isActiveLink = ({ isActive }) => {
  return isActive ? styles.active : styles.linkHeader;
};

return (
  <NavLink className={isActiveLink} to={props.to}>
    {({ isActive }) => (
      <>
        <props.icon type={isActive ? 'primary' : 'secondary'} />
        <p className='ml-2 text text_type_main-default'>{props.name}</p>
      </>
    )}
  </NavLink>
);
}



export default LinkHeader;


import styles from "./link-header.module.css";
import { NavLink } from "react-router-dom";

type TLinkHeadertypeprops = {
  to: string,
  name: string,
  icon: any
}

function LinkHeader(props:TLinkHeadertypeprops) {
  
const isActiveLink = (isActive: any) => {
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

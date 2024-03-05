import React, { useEffect } from "react";
import styles from "./order-error.module.css";
import icon from "../../images/successIcon.svg";
 
type TOrderErrortypeprops = {
  one: string,
  two: string,
  three: string|JSX.Element,
}


function OrderError(props: TOrderErrortypeprops) {
   
  return (
    <section className={styles.orderError}>
      
      <div className=" mt-8 mb-15 text text_type_main-medium">{props.one}</div>
      
      <div className=" mt-15 text text_type_main-medium">{props.two}</div>
      <div className=" mt-2 mb-30 text text_type_main-default text_color_inactive">
        {props.three}
      </div>
    </section>
  );
}

export default OrderError;
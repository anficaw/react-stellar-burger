import React, { useEffect } from "react";
import styles from "./order-details.module.css";
import icon from "../../images/successIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { getNewBurgerSelector, getOrderSelector} from "../store/action-selector";
import { fetchOrder } from "../store/order-slice";

function OrderDetails({one, two, three}) {
  const dispatch = useDispatch();
  
  const newBurgerOrder = useSelector(getNewBurgerSelector);
  const newBurgerID = {
    ingredients: newBurgerOrder.newBurgerID,
  };
    
  useEffect (() => {
    dispatch(fetchOrder(newBurgerID));  
  }, [])
    
  const newOrder = useSelector(getOrderSelector);


  return (
    <section className={styles.orderDetails}>
      <p className="mt-30 text text_type_digits-large">{newOrder}</p>
      <p className=" mt-8 mb-15 text text_type_main-medium">{one}</p>
      <img src={icon} alt="Галка" />
      <p className=" mt-15 text text_type_main-small">{two}</p>
      <p className=" mt-2 mb-30 text text_type_main-default text_color_inactive">
        {three}
      </p>
    </section>
  );
}

export default OrderDetails;

import React, { useEffect } from "react";
import styles from "./order-details.module.css";
import icon from "../../images/successIcon.svg";
 
import { useAppDispatch,useAppSelector } from "../../types/hook";
import { getNewBurgerSelector, getOrderSelector} from "../../store/action-selector";
import { fetchOrder } from "../../store/order-slice";
import { TNewBurgerConstructor } from "../../types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOrder } from "../../utils/api";
 
type TOrderDetailstypeprops = {
  one: string,
  two: string,
  three: string|JSX.Element,
}

type ТnewBurgerID = {
  ingredients:string[],};



function OrderDetails(props:TOrderDetailstypeprops) {

  const dispatch = useAppDispatch();
 
  const newBurgerOrder: TNewBurgerConstructor = useAppSelector(getNewBurgerSelector);
  const newBurgerID: ТnewBurgerID = {
    ingredients: newBurgerOrder.newBurgerID,
  };
  
  console.log('555555555');
  console.log(newBurgerID);
  useEffect (() => {
     dispatch(fetchOrder(newBurgerID));
     
  }, [])
    
  const newOrder: string = useAppSelector(getOrderSelector); 

  return (
    <section className={styles.orderDetails}>
      <p className="mt-30 text text_type_digits-large">{newOrder}</p>
      <p className=" mt-8 mb-15 text text_type_main-medium">{props.one}</p>
      <img src={icon} alt="Галка" />
      <p className=" mt-15 text text_type_main-small">{props.two}</p>
      <p className=" mt-2 mb-30 text text_type_main-default text_color_inactive">
        {props.three}
      </p>
    </section>
  );
}

export default OrderDetails;

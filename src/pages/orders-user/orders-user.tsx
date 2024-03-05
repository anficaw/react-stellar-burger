import LineUserOrders from "../../components/orders-userline/line-orders";
import styles from "./orders-user.module.css";
import { getconnectActive } from "../../store/action-selector";
import { useAppDispatch, useAppSelector } from "../../types/hook";
import { useEffect } from "react";
import {
  connect as connectOrders,
  disconnect as disconnectOrders,
} from "../../store/actoins";
import { userordersServerUrl } from "../../utils/data";


function OrdersUser() {

const connect = useAppSelector(getconnectActive);
const dispatch = useAppDispatch();
const pppp=localStorage.getItem("accessToken");
let userordersServerUrlpersonal = userordersServerUrl ;
if (pppp !== null) {
  // userordersServerUrlpersonal = userordersServerUrl +"?token="+pppp.slice(6,);
  userordersServerUrlpersonal = userordersServerUrl+`?token=${pppp.slice(7,)}`;
}

useEffect(() => {
  dispatch(connectOrders(userordersServerUrlpersonal));
}, [dispatch]);
 
useEffect(() => {
  return() =>{
    dispatch(disconnectOrders());
  }
}, []);  
  
return(
<div className={styles.orders}>
       <LineUserOrders/>
  </div>
)

}

export default OrdersUser;


import styles from "./line-orders.module.css";

import OrderString from "../order-string/order-string";

import { selectOrders, selectUserOrders } from "../../store/action-selector";
import { useAppSelector } from "../../types/hook";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function LineOrders() {
  let list = useAppSelector(selectOrders);
  
  return (
  
  <div className={`custom-scroll ${styles.lineorders}`} > 
    {list.map((item) => {
            return (
            <li className={styles.component} key={item._id}>
              <OrderString order={item}/>
            </li>
          );               
      })
    }
  </div>
  )
}

export default LineOrders;

import LineOrders from "../../components/orders-line/line-orders";
import OrdersStatistic from "../../components/orders-statistic/orders-statistic";
import styles from "./list-orders.module.css";
import { ordersServerUrl } from "../../utils/data";
import { useEffect } from "react";
import {
  connect as connectOrders,
  disconnect as disconnectOrders,
} from "../../store/actoins";
import { useAppSelector,useAppDispatch } from "../../types/hook";
import { getconnectActive } from "../../store/action-selector";


function ListOrders() {
/*------------------------------------------------------*/
const connect = useAppSelector(getconnectActive);
const dispatch = useAppDispatch();
useEffect(() => {
  dispatch(connectOrders(ordersServerUrl));
}, [dispatch]);

 
useEffect(() => {
  return() =>{
    dispatch(disconnectOrders());
  }
}, []);


/*------------------------------------------------------*/

  return (
  <div className={styles.orders}>
       <div className={styles.heading}>
          <h1 className="text text_type_main-large">Лента заказов</h1>
        </div>
        <main className={styles.main}>
          <section className={styles.mainSection}>
            
            <LineOrders/>
          </section>
          <section className={styles.mainSection}>
            <OrdersStatistic/>
          </section>
        </main>
  </div>
  )
}

export default ListOrders;

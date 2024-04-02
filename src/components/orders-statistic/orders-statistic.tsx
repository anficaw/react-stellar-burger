import styles from "./orders-statistic.module.css";
import {TOrder } from "../../types";
 
import { selectOrders, selectTotal, selectTotalToday } from "../../store/action-selector";
import { useAppSelector } from "../../types/hook";

function OrdersStatistic() {
   const list = useAppSelector(selectOrders);
   const total = useAppSelector(selectTotal);
   const totaltoday = useAppSelector(selectTotalToday);
 
   const listinwork: TOrder[] = [];
   const listready: TOrder[] = [];

   {list.map((item) => 
    {if (item.status === "done") {
      listready.push(item)      
     }else {
      listinwork.push(item)
     }}
    )}
   
   
  return (
  <div className={styles.ordersstatistic}>
    <div className={styles.order}>
      <div className={styles.orderwork}>
         <h2 className="text text_type_main-medium mb-6">Готовы:</h2>
         <div className={`${styles.orderready} custom-scroll text text_type_main-medium mb-2`} > 
            {listready.map((item) => (
              <div className={`${styles.number} text text_type_main-medium mb-2`} key={item._id}>
              {item.number}   
              </div>                             
            
             ))}
         </div>      
      </div>
      <div className={styles.orderwork}>
        <h2 className="text text_type_main-medium mb-6">В работе:</h2>
        <div className={`${styles.orderinwork} text text_type_main-medium mb-2`} > 
           {listinwork.map((item) => (
            <div className={`${styles.number} text text_type_main-medium mb-2`} key={item._id}>
                  {item.number}                        
            </div>  
             ))}
        </div>
        </div>
    </div>
    <h2 className="text text_type_main-medium mb-2">Выполнено за все время:</h2>
      <p className="text text_type_digits-large mb-8" >{total}</p>
    <h2 className="text text_type_main-medium mb-2">Выполнено за сегодня:</h2>
      <p className="text text_type_digits-large">{totaltoday}</p>

  </div>
  
)
}

export default OrdersStatistic;

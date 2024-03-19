import styles from "./order.module.css";
import {TOrder} from "../../types";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";

type TOrderypeprops = {
  order: TOrder,
}

function Order(props:TOrderypeprops) {
  
  const orderStr= props.order;
  const list = orderStr.ingredients;

   let status = 'Готовится';
    if (orderStr.status ==='done'){
      status='Выполнен'
    }
   return (

  <div className={styles.order} > 
  <div className={styles.title}>
  <h2 className={`text text_type_digits-default mb-10 ${styles.text}`}># {orderStr.number}</h2>
  </div>
     
     <h1 className="text text_type_main-medium mb-3">{orderStr.name}</h1>
     
     <p className={`text text_type_main-small mb-15 ${styles.textblue}`}>{status}</p>
      
      <h2 className="text text_type_main-medium mb-6">Состав:</h2>

      <section className={`custom-scroll ${styles.list}`}>
         {list.map((item) => {
            return (
            <div className={styles.component} key={item.ingredient._id}>
              <div className={styles.ring}>
                <div className={styles.preview}>
                  <img
                   className={styles.image}
                   alt={item.ingredient.name}
                   src={item.ingredient.image}
                  />
                </div>
              </div>
              <div className={` ${styles.nameall}`} >
              <div className="text text_type_main-small mr-10">{item.ingredient.name}</div>
              <div className="text text_type_digits-default">{`${item.amount} x ${item.ingredient.price} `}</div>
                        
              </div>
              <CurrencyIcon type="primary" />  
             </div>
          );
                   
           })}
      </section>
   <div className={styles.podval}>
      <div className={`text_type_main-default text_color_inactive`}>
         <FormattedDate date={new Date(orderStr.updatedAt)} />
      </div>
   
      <div className={`text text_type_digits-default mr-10 ${styles.namebottom}`}>
            {orderStr.summ}        
              <CurrencyIcon type="primary" />

      </div>  
   </div> 
  
  </div>
  )
}

export default Order;

//<FormattedDate date={new Date(orderStr.updatedAt)} />

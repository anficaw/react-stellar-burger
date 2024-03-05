import React, { useEffect } from "react";
import styles from "./order-string.module.css";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { TOrder,TOrderIngredient} from "../../types";

import { Link, useLocation } from "react-router-dom";

type TOrdersStringProps = {
  order: TOrder;
};

function OrderString(props: TOrdersStringProps) {
  
  const location = useLocation();

  const order: TOrderIngredient[] = props.order.ingredients;
  let status = 'Готовится';

  if (props.order.status ==='done'){
    status='Выполнен'
  }

  let previewIngredients = [];
  let restIngredients = 0;
  let coll = 5;
  let rest = true;

  if (order.length > coll) {
    previewIngredients = order.slice(0, coll);
    restIngredients = order.length - coll;
    rest = false;
  } else {
    previewIngredients = order.slice();
  }
  const bun:TOrderIngredient|undefined=previewIngredients.find(el => el.ingredient.type === 'bun')
    if (bun) {
        previewIngredients.splice(previewIngredients.indexOf(bun), 1)
        previewIngredients.push(bun)
    }

  return (
    <Link
      to={`${location.pathname}/${props.order.number}`}
      key={props.order._id}
      className={styles.orderString}
      state={{ background: location }}
      /*ref={dragRef}*/
    >
      <div className={styles.datanamber}>
        <div className={`text text_type_digits-default ${styles.summa}`}>
          #{props.order.number}
        </div>
        <div
          className={`text_type_main-default text_color_inactive ${styles.summa}`}
        >
          <FormattedDate date={new Date(props.order.updatedAt)} />
           
        </div>
      </div>
      <div className={`text text_type_main-medium ${styles.name}`}>
        {props.order.name}
      </div>
      <p className={`text text_type_main-small ml-5 ${styles.textblue}`}>{status}</p>
      <div className={styles.details}>
        <div className={styles.ingredients}>
         {previewIngredients.map((item, index) => (
            <div className={styles.preview} key={item.ingredient._id}>
               {(index === 0 && rest ===false) && (
                <div className={`${styles.restIngredients} text text_type_main-small`}>
                  <div>{`${restIngredients}+`}</div>
                  </div>
                )}
              <img src={item.ingredient.image} className={styles.previewImage} alt={item.ingredient.name} />
              
            </div>
                  ))}
        </div>
        <div className={styles.summ}>
          <div className=" mr-4 text text_type_digits-default">{props.order.summ}</div>
          <CurrencyIcon type="primary" />
        </div>
      </div>

        
    </Link>
  );
}
export default OrderString;

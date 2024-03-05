import styles from "./burger-ingredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
 
import { Link, useLocation } from "react-router-dom";

import { useDrag } from "react-dnd";

import { TIngredients } from "../../types";


type ТBurgerIngredientprops = {
  card:TIngredients,
}

type ТCollectedprops = {
  isDragStart:boolean;
}

type ТDragprops = {
  ingredient:TIngredients,
}

function BurgerIngredient(props:ТBurgerIngredientprops) {
   
  const card:TIngredients = props.card;
  
  const location = useLocation();
  
  const [{ isDragStart }, dragRef] = useDrag<ТDragprops,unknown,ТCollectedprops>({
    type: "ing",
    item: { ingredient: card },
    
  });
 
  return (
    <Link
      to={`/ingredients/${card.ingredient._id}`}
      key={card.ingredient._id}
      className={styles.burgerIngredient}
      state={{ background: location }}
      ref={dragRef}
     
    >
      <img
        className={styles.image}
        alt={card.ingredient.name}
        src={card.ingredient.image}
        draggable="false"

      />
      <div className={styles.imageprice}>
        <div className=" mr-2 text text_type_digits-default">
          {card.ingredient.price}
        </div>
        <CurrencyIcon type="primary"/>
      </div>
      <div className={`text text_type_main-default ${styles.title}`}>
        {card.ingredient.name}
      </div>

      {card.number != 0 && (
        <div className={`text text_type_digits-default ${styles.nom}`}>
          {card.number}
        </div>
      )}
    </Link>
  );
}
export default BurgerIngredient;

import styles from "./burger-ingredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { Link, NavLink,useSearchParams, useLocation } from "react-router-dom";

import { useDrag } from "react-dnd";
import { addIng } from "../../store/ingradient-slice";

function BurgerIngredient({ card }) {
   
  const location = useLocation();

  const [{ isDragStart }, dragRef] = useDrag({
    type: "ing",
    item: card,
    
  });

  
  return (
    <Link
      /*state={{ background: true }}*/
      to={`/ingredients/${card.ingradient._id}`}
      key={card.ingradient._id}
      className={styles.burgerIngredient}
      state={{ background: location }}
      ref={dragRef}

    >
      <img
        className={styles.image}
        alt={card.ingradient.name}
        src={card.ingradient.image}
        draggable="false"

      />
      <div className={styles.imageprice}>
        <div className=" mr-2 text text_type_digits-default">
          {card.ingradient.price}
        </div>
        <CurrencyIcon />
      </div>
      <div className={`text text_type_main-default ${styles.title}`}>
        {card.ingradient.name}
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

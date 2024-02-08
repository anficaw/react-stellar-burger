import styles from "./burger-ingredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { useDrag } from "react-dnd";
import { addIng } from "../../store/ingradient-slice";

function BurgerIngredient({ card, detalesingradient }) {

  const dispatch = useDispatch();

  const [{ isDragStart }, dragRef] = useDrag({
    type: "ing",
    item: card,
    
  });

  return (
    <Link
      to={`/ingredients/${card.ingradient._id}`}
      key={card.ingradient._id}
      className={styles.burgerIngredient}
      onClick={() => detalesingradient(card.ingradient)}
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

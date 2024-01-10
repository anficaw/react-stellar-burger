import React, { useState } from "react";
import styles from "./burger-ingredient.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

function BurgerIngredient({ card, detalesingradient }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const onClose = () => {
    setModalOpen(false);
  };

  const onOpen = () => {
    setModalOpen(true);
  };
  let number = 1;
  return (
    <div
      className={styles.burgerIngredient}
      onClick={() => detalesingradient(card)}
    >
      <img className={styles.image} alt={card.name} src={card.image} />
      <div className={styles.imageprice}>
        <div className=" mr-2 text text_type_digits-default">{card.price}</div>
        <CurrencyIcon />
      </div>
      <div className={`text text_type_main-default ${styles.title}`}>
        {card.name}
      </div>
      <div className={`text text_type_digits-default ${styles.nom}`}>
        {card.num}
      </div>
    </div>
  );
}
export default BurgerIngredient;

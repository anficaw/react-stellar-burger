import React, { useState } from "react";
import styles from "./burger-ingredients.module.css";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import TitleList from "../title-list/title-list";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredients({ cards }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [iscardOpen, setCardOpen] = useState({});
  const [current, setCurrent] = React.useState("one");

  const onClose = () => {
    setModalOpen(false);
  };

  const onOpen = () => {
    setModalOpen(true);
  };

  const onChoose = (one) => {
    onOpen();
    setCardOpen(one);
  };

  let count = 1;
  {
    cards.map((item) => {
      item.num = count;
      count = count + 1;
    });
  }

  return (
    <section className={styles.burgerIngredients}>
      <p className="mt-10 mb-5 text text_type_main-large">Соберите бургер</p>
      <div className={styles.burgerIngredientslist}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          {" "}
          Булки{" "}
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          {" "}
          Соусы{" "}
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          {" "}
          Начинки{" "}
        </Tab>
      </div>
      <div className={`custom-scroll ${styles.list}`}>
        <TitleList name="Булки" />
        <ul className={styles.components}>
          {cards.map((item) => {
            if (item.type === "bun") {
              return (
                <li className={styles.component} key={item._id}>
                  <BurgerIngredient
                    card={item}
                    key={item._id}
                    detalesingradient={onChoose}
                  />
                </li>
              );
            }
          })}
        </ul>
        <TitleList name="Соусы" />
        <ul className={styles.components}>
          {cards.map((item) => {
            if (item.type === "sauce") {
              return (
                <li className={styles.component} key={item._id}>
                  <BurgerIngredient
                    card={item}
                    key={item._id}
                    detalesingradient={onChoose}
                  />
                </li>
              );
            }
          })}
        </ul>
        <TitleList name="Начинки" />
        <ul className={styles.components}>
          {cards.map((item) => {
            if (item.type === "main") {
              return (
                <li className={styles.component} key={item._id}>
                  <BurgerIngredient
                    card={item}
                    key={item._id}
                    detalesingradient={onChoose}
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
      {isModalOpen && (
        <Modal onClose={onClose}>
          <IngredientDetails ingradient={iscardOpen} />
        </Modal>
      )}
    </section>
  );
}
export default BurgerIngredients;

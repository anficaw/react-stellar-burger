import React, { useState } from "react";
import styles from "./burger-ingredients.module.css";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import TitleList from "../title-list/title-list";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getIngradientsSelector,
  getIngradientSelector,
} from "../store/action-selector";
 
import { addIng } from "../store/ingradient-slice";

function BurgerIngredients() {
  const [isModalOpen, setModalOpen] = useState(false);

  const [headersScroll, setHeadersScroll] = useState([0, 0, 0]);

  const [current, setCurrent] = useState("one");

  const cards = useSelector(getIngradientsSelector);
  const ingradient = useSelector(getIngradientSelector);

  const dispatch = useDispatch();

  const onClose = () => {
    setModalOpen(false);
  };

  const onOpen = () => {
    setModalOpen(true);
  };

  const onChoose = (one) => {
    onOpen();

    dispatch(addIng(one));
  };

  const onScrollDetal = () =>{
    const ttt = document.getElementsByName("Булки");
    var rect = ttt.getBoundingClientRect();
    console.log ('111111');
    console.log (ttt);
    console.log (rect);
    


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
      <div className={`custom-scroll ${styles.list}`} onScroll={onScrollDetal()}>
        <TitleList name="Булки" />
        <ul className={styles.components}>
          {cards.map((item) => {
            if (item.ingradient.type === "bun") {
              return (
                <li className={styles.component} key={item.ingradient._id}>
                  <BurgerIngredient
                    card={item}
                    key={item.ingradient._id}
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
            if (item.ingradient.type === "sauce") {
              return (
                <li className={styles.component} key={item.ingradient._id}>
                  <BurgerIngredient
                    card={item}
                    key={item.ingradient._id}
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
            if (item.ingradient.type === "main") {
              return (
                <li className={styles.component} key={item.ingradient._id}>
                  <BurgerIngredient
                    card={item}
                    key={item.ingradient._id}
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
          <IngredientDetails ingradient={ingradient} />
        </Modal>
      )}
    </section>
  );
}
export default BurgerIngredients;

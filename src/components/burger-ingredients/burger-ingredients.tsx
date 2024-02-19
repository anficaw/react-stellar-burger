import React, { useState } from "react";
import styles from "./burger-ingredients.module.css";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import TitleList from "../title-list/title-list";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import {  useSelector } from "react-redux";
import {
  getIngredientsSelector,
  getIngredientSelector,
} from "../../store/action-selector";
import { TIngredients } from "../../types";


function BurgerIngredients() {
 
  const [current, setCurrent] = useState("one");

  const cards:TIngredients[] = useSelector(getIngredientsSelector);

  const onScrolling = () => {
    const vsection = document.getElementById("ingredients_list");
    const vbun = document.getElementById("bun");
    const vsauce = document.getElementById("sauce");
    const vmain = document.getElementById("main");
    const sections = [vbun,vsauce,vmain];
    const cb = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          const activeId: string = entry.target.id;
           if (activeId ==="bun"){
            setCurrent("one");}
            if (activeId ==="sauce"){
              setCurrent("two");}
              if (activeId ==="main"){
                setCurrent("three");
              }
            }
          });
        };

const sectionObserver = new IntersectionObserver(cb, {
  root: vsection,
  rootMargin: '500px 0px -500px 0px',
  threshold: [0,0,1]
});

sections.forEach((sec:any) => {
  sectionObserver.observe(sec);
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
      <div className={`custom-scroll ${styles.list}`}  onScroll={onScrolling} id='ingredients_list'>
        <TitleList name="Булки" id="bun"/>
        <ul className={`section ${styles.components}`} >
          {cards.map((item) => {
            if (item.ingredient.type === "bun") {
              return (
                <li className={styles.component} key={item.ingredient._id}>
                  <BurgerIngredient
                    card={item}
                    key={item.ingredient._id}
                    
                  />
                </li>
              );
            }
          })}
        </ul>
        <TitleList name="Соусы" id="sauce"/>
        <ul className={`section ${styles.components}`} >
          {cards.map((item) => {
            if (item.ingredient.type === "sauce") {
              return (
                <li className={styles.component} key={item.ingredient._id}>
                  <BurgerIngredient
                    card={item}
                    key={item.ingredient._id}
                    
                  />
                </li>
              );
            }
          })}
        </ul>
        <TitleList name="Начинки" id="main"/>
        <ul className={`section ${styles.components}`} >
          {cards.map((item) => {
            if (item.ingredient.type === "main") {
              return (
                <li className={styles.component} key={item.ingredient._id}>
                  <BurgerIngredient
                    card={item}
                    key={item.ingredient._id}
                    
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
            
    </section>
  );
}
export default BurgerIngredients;

import React, { useRef, useState } from "react";
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
} from "../../store/action-selector";
import { useParams, useNavigate } from "react-router-dom";
import { addIng } from "../../store/ingradient-slice";

function BurgerIngredients() {

  /*const [isModalOpen, setModalOpen] = useState(false);*/
 
  const [current, setCurrent] = useState("one");

  const cards = useSelector(getIngradientsSelector);
  const ingradient = useSelector(getIngradientSelector);

  const navigate = useNavigate(); 
  
  const dispatch = useDispatch();

  /*const onClose = () => {

    setModalOpen(false);
    navigate('/'); 
   
  };

  const onOpen = () => {
    setModalOpen(true);
  };*/

  const onChoose = (one) => {
    /*onOpen();*/
    /*dispatch(addIng(one));*/
  };

  /*if (ingId) {
    const singl = cards.filter((item) => item.ingradient._id === ingId);
    const ingradient= singl[0].ingradient;
    onChoose(ingradient)
    /*onOpen();
    console.log('555555');
    console.log(ingradient)};*/


/*--------------------------------------------------------------*/
const onScrolling = () => {
const links = document.querySelectorAll(".menu-item");
const vsection = document.getElementById("ingredients_list");

const vbun = document.getElementById("bun");
const vsauce = document.getElementById("sauce");
const vmain = document.getElementById("main");
const sections = [vbun,vsauce,vmain];
 
const cb = (entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
           
      const activeId = entry.target.id;
    
      if (activeId ==="bun"){
        setCurrent("one");
      }
      if (activeId ==="sauce"){
        setCurrent("two");
      }
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

sections.forEach((sec) => {
  sectionObserver.observe(sec);
});

}
/*--------------------------------------------------------------*/


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
        <TitleList name="Булки" type='bun' id="bun"/>
        <ul className={`section ${styles.components}`} >
          {cards.map((item) => {
            if (item.ingradient.type === "bun") {
              return (
                <li className={styles.component} key={item.ingradient._id}>
                  <BurgerIngredient
                    card={item}
                    key={item.ingradient._id}
                    
                  />
                </li>
              );
            }
          })}
        </ul>
        <TitleList name="Соусы" type='sauce' id="sauce"/>
        <ul className={`section ${styles.components}`} >
          {cards.map((item) => {
            if (item.ingradient.type === "sauce") {
              return (
                <li className={styles.component} key={item.ingradient._id}>
                  <BurgerIngredient
                    card={item}
                    key={item.ingradient._id}
                    
                  />
                </li>
              );
            }
          })}
        </ul>
        <TitleList name="Начинки" type='main' id="main"/>
        <ul className={`section ${styles.components}`} >
          {cards.map((item) => {
            if (item.ingradient.type === "main") {
              return (
                <li className={styles.component} key={item.ingradient._id}>
                  <BurgerIngredient
                    card={item}
                    key={item.ingradient._id}
                    
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

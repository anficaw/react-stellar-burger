import React from "react";
import styles from './main.module.css';
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function Main(cards) {
    console.log(cards)
    return(
        <main className={styles.main}>
            <BurgerIngredients cards={cards}/>
            <BurgerConstructor cards={cards}/>
             
        </main>

    )
};
export default Main;
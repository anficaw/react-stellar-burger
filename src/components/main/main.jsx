import React, { useState } from "react";
import styles from "./main.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";

function Main({ cards }) {
  return (
    <main className={styles.main}>
      <BurgerIngredients cards={cards} />
      <BurgerConstructor />
    </main>
  );
}
export default Main;


 import React from "react";
 import styles from './burger-ingredient.module.css';
 import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
 
 
 function BurgerIngredient(card) {
     
     let number=1;
     return(
          
         <div className={styles.burgerIngredient}>
            <img className={styles.image} alt={card.card.name} src={card.card.image}/>
            <div className={styles.imageprice}>
                    <div className=" mr-2 text text_type_digits-default">{card.card.price}</div>
                    <CurrencyIcon/>
            </div>
            <div className={`text text_type_main-default ${styles.title}`}>{card.card.name}</div>
            <div className={`text text_type_digits-default ${styles.nom}`}>{card.card.num}</div>
         </div>
 
     )
 };
 export default BurgerIngredient;
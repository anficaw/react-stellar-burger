import React from "react";
import styles from './burger-ingredients.module.css';
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import TitleList from "../title-list/title-list";
 
function BurgerIngredients(cards) {
    
     const datan = cards.cards.cards.slice(0);
     let count = 1;
     
     {datan.map((item) =>{
      item.num = count;
      count = count+1;
      
     })
    }

     console.log(datan);
    return(
         <section className={styles.burgerIngredients}>
            <p className="mt-10 mb-5 text text_type_main-large">Соберите бургер</p>
            <div className={styles.burgerIngredientslist}>
               <div className={`text text_type_main-default ${styles.burgerIngredientscomp}`}>Булки</div>
               <div className={`text text_type_main-default ${styles.burgerIngredientscomp}`}>Соусы</div>
              <div className={`text text_type_main-default ${styles.burgerIngredientscomp}`}>Начинки</div>
            </div>
            <div className={`custom-scroll ${styles.list}`}>

             <TitleList name="Булки"/>
               <ul className={styles.components}>
                 
                 {datan.map((item) =>{
                   if (item.type ==="bun"){
                    return <BurgerIngredient card={item} key={item._id}/>
                 }
                 } )}

               </ul>
             <TitleList name="Соусы"/>
               <ul className={styles.components}>
                 
                 {datan.map((item) =>{
                   if (item.type ==="sauce"){
                    return <BurgerIngredient card={item} key={item._id}/>
                 }
                 } )}

               </ul>
             <TitleList name="Начинки"/>
               <ul className={styles.components}>
                 
                 {datan.map((item) =>{
                   if (item.type ==="main"){
                    return <BurgerIngredient card={item} key={item._id}/>
                 }
                 } )}

               </ul>
            
             </div>


        </section>

    )
};
export default BurgerIngredients;
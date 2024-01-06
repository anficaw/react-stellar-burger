import React from "react";
import styles from './burger-constructor.module.css';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";



function BurgerConstructor(cards) {
    const datan = cards.cards.cards.slice(0);


    const NewBurger = {
        bun: datan[0],
        ingradients: datan.slice(1,5)
    }

     console.log (NewBurger);

    return(
        <section className={styles.burgerconstructor}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text = {NewBurger.bun.name}
              price= {NewBurger.bun.price}
              thumbnail={NewBurger.bun.image_mobile}
             />
            
             
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text = {NewBurger.bun.name}
              price= {NewBurger.bun.price}
              thumbnail={NewBurger.bun.image_mobile}
             />

        </section>

    )
};
export default BurgerConstructor;
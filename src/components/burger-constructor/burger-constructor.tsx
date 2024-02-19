import React, { useState } from "react";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Icon from "../../images/icon 36x36.svg";
 
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import BurgerList from "../burger-list/burger-list";

import { useDispatch, useSelector } from "react-redux";
import { getNewBurgerSelector, getUserActive } from "../../store/action-selector";
 
import {
  addBurger,
  addIngredient,
  addBun,
  delIngredient,
} from "../../store/newburger-slice";
import { useDrop } from "react-dnd";

import { newBurgerone } from "../../utils/data";
import OrderError from "../order-error/order-error";
import LinLogin from "../link-login/link-login";
import { TNewBurgerConstructor,TUser,TIngredients} from "../../types";
 

let ok = "true";
let okOne: string = "Идентификатор заказа";
let okTwo: string = "Ваш заказ начали готовить";
let okThree: string|JSX.Element = "Дождитесь готовности на орбитальной странции";



function BurgerConstructor() {
  const dispatch = useDispatch();

  const newBurgerOrder:TNewBurgerConstructor = useSelector(getNewBurgerSelector);
  
  const user:TUser = useSelector(getUserActive);

  const NewBurgerCost = newBurgerOrder.newBurgerCost;

  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalErrorOpen, setModalErrorOpen] = useState(false);

  const onClose = () => {
    dispatch(addBurger(newBurgerone));
    setModalOpen(false);
  };

  const onCloseError = () => {
    setModalErrorOpen(false);
  };

  const onOpen = () => {
    okOne = "Идентификатор заказа";
    okTwo = "Ваш заказ начали готовить";
    okThree = "Дождитесь готовности на орбитальной странции";

    if (NewBurgerCost === 0) {
      okOne = "Пожалуйста, соберите свой бургер ";
      okTwo = "Мы начнем готовить, как только получим заказ";
      okThree = "Не торопитесь, выбирайте с умом";
      setModalErrorOpen(true);
    } else {
      if (newBurgerOrder.newBurger.bun.ingredientbun.price === 0) {
        okOne = "Пожалуйста, добавьте булочку к заказу";
        okTwo = "Мы начнем готовить, как только получим заказ";
        okThree = "Не торопитесь, выбирайте с умом";
        setModalErrorOpen(true);
      }else {
        if (user === null) {
          
          okOne = "Что бы готовить, нам нужно знать для кого ";
          okTwo = "Мы начнем готовить, как только вы авторизуетесь";
          okThree =  <LinLogin
            to="/login" 
            qwest="Хотите оформить заказ?" 
            text="Войти"></LinLogin>
          setModalErrorOpen(true);        
        } else setModalOpen(true);

      }    
    }
  };

  type ТCollectedprops = {
    isDragStart:boolean;
  }
  
  type ТDragprops = {
    ingredient:TIngredients,
  }

  const [, dropRef] = useDrop<ТDragprops,unknown,unknown >({
    accept: "ing",
    drop(card) {
      const addIngredientt = card;
       {console.log("333333")}
       {console.log(card)}
      newBurgerOrder.newBurger.ingredients.map((item, index) => {
        if (item.ingredient.price === 0) {
          dispatch(delIngredient(index));
        }
      });
      if (addIngredientt.ingredient.ingredient.type === "bun") {
        dispatch(addBun(addIngredientt.ingredient.ingredient));
      }
      {console.log("проверяем что")}
       {console.log(addIngredientt.ingredient.ingredient.type)}

      if (addIngredientt.ingredient.ingredient.type !== "bun") {
        {console.log("начинка")}
        {console.log(card)}
        dispatch(addIngredient(addIngredientt.ingredient));
      }

    },
  });

  return (
    <section
      className={styles.burgerconstructor}
      onDragOver={(evt) => evt.preventDefault()}
      ref={dropRef}
    >
       {console.log("bun")}
       {console.log(newBurgerOrder)}
      <div className={`mt-25 pt-4 pl-8 mr-7 ${styles.bun}`}>
           
        <ConstructorElement
          type="top"
          isLocked={true}
          text={newBurgerOrder.newBurger.bun.ingredientbun.name + " (верх)"}
          price={newBurgerOrder.newBurger.bun.ingredientbun.price}
          thumbnail={newBurgerOrder.newBurger.bun.ingredientbun.image_mobile}
          key={newBurgerOrder.newBurger.bun.ingredientbun._id}
        />
      </div>
      <div className={`custom-scroll ${styles.burgerConstructorList}`}>
        {newBurgerOrder.newBurger.ingredients.map((item, index) => {
           {console.log("6666666666")
           console.log(item)}
          return (
              <div></div>      
            /*<BurgerList card={item} index={index} key={item.id}></BurgerList>9*/
          )
        })}
      </div>

      <div className={`mb-4 mt-4 pl-8 mr-7 ${styles.bun}`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={newBurgerOrder.newBurger.bun.ingredientbun.name + " (низ)"}
          price={newBurgerOrder.newBurger.bun.ingredientbun.price}
          thumbnail={newBurgerOrder.newBurger.bun.ingredientbun.image_mobile}
          key={newBurgerOrder.newBurger.bun.ingredientbun._id}
        />
      </div>
      <div className={`mt-10 text text_type_digits-medium ${styles.summa}`}>
        <div>{NewBurgerCost}</div>
        <img className={styles.image} src={Icon} alt="бриллиант"></img>
        <Button htmlType="button" type="primary" size="large" onClick={onOpen}>
          Оформить заказ
        </Button>
      </div>
      {isModalOpen && (
        <Modal onClose={onClose}>
          <OrderDetails one={okOne} two={okTwo} three={okThree} />
        </Modal>
      )}

      {isModalErrorOpen && (
        <Modal onClose={onCloseError}>
          <OrderError  one={okOne} two={okTwo} three={okThree} />
        </Modal>
      )}
    </section>
  );
}
export default BurgerConstructor;


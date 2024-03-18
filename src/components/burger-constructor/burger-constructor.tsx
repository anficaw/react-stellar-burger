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
import { useAppDispatch,useAppSelector } from "../../types/hook";
// @ts-ignore: error message
import { v4 as uuid } from 'uuid';
import { getNewBurgerSelector, getUserActive,getUserReg } from "../../store/action-selector";
 
import {
  
  addIngredient,
  addBun,
  delIngredient,
  addBurger,
} from "../../store/newburger-slice";
import {dellNumber} from "../../store/order-slice";

import { useDrop } from "react-dnd";

import { newBurgerone } from "../../utils/data";
import OrderError from "../order-error/order-error";
import LinLogin from "../link-login/link-login";
import { TNewBurgerConstructor,TUser,TIngredients} from "../../types";
import { checkUserAuth, getUser } from "../../store/action";
 

let ok = "true";
let okOne: string = "Идентификатор заказа";
let okTwo: string = "Ваш заказ начали готовить";
let okThree: string|JSX.Element = "Дождитесь готовности на орбитальной странции";



function BurgerConstructor() {
  const dispatch = useAppDispatch();

  const newBurgerOrder:TNewBurgerConstructor = useAppSelector(getNewBurgerSelector);
  
  const user = useAppSelector(getUserActive);

   
  const NewBurgerCost = newBurgerOrder.newBurgerCost;

  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalErrorOpen, setModalErrorOpen] = useState(false);

  const onClose = () => {
    dispatch(addBurger(newBurgerone));
    dispatch(dellNumber());
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
        } else {
          
          setModalOpen(true);
          
        };

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
       
      newBurgerOrder.newBurger.ingredients.map((item, index) => {
        if (item.ingredient.price === 0) {
          dispatch(delIngredient(index));
        }
      });
      if (addIngredientt.ingredient.ingredient.type === "bun") {
        dispatch(addBun(addIngredientt.ingredient.ingredient));
      }
       
      if (addIngredientt.ingredient.ingredient.type !== "bun") {
        addIngredientt.ingredient.id = uuid();
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
           
             return (
            <BurgerList card={item} index={index} key={item.id}></BurgerList>
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


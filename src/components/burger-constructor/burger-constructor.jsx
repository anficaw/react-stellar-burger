import React, { useState } from "react";
import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Icon from "../../images/icon 36x36.svg";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import BurgerList from "../burger-list/burger-list";

import { useDispatch, useSelector } from "react-redux";
import {
  getNewBurgerSelector,
  getIngradientSelector,
  getOrderSelector,
} from "../store/action-selector";
import { getOrder } from "../../utils/api";
import { addBurger } from "../store/newburger-slice";
import { useDrag, useDrop } from "react-dnd";
import { addIng } from "../store/ingradient-slice";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import {fetchList} from "../store/order-slice";


function BurgerConstructor() {
  const dispatch = useDispatch();

  const addIngradient = useSelector(getIngradientSelector);

  const newBurgerOrder = useSelector(getNewBurgerSelector);
  /*const numberOrder = useSelector(getOrderSelector);*/
  const NewBurgerCost = newBurgerOrder.newBurgerCost;

  const newBurgerID = {
    ingredients: newBurgerOrder.newBurgerID,
  };

  const [isModalOpen, setModalOpen] = useState(false);
   

  const onClose = () => {
    setModalOpen(false);
  };

    
  const onOpen = () => {
    setModalOpen(true);
    /*  getOrder(newBurgerOrder.newBurgerID)
      .then((data) => {
        setnumberOrder(data.order.number);
        setModalOpen(true);
      })
      .catch((err) => console.log(err));*/
  };

  const [, dropRef] = useDrop({
    accept: "ing",
    drop(card) {
      const addIngradient = card;
      const newBurg = {
        bun: {},
        ingradients: [],
      };

      newBurgerOrder.newBurger.ingradients.map((item) => {
        if (item.ingradient.price != 0) {
          newBurg.ingradients.push(item);
        }
      });

      newBurg.bun = newBurgerOrder.newBurger.bun;

      if (addIngradient.ingradient.type === "bun") {
        newBurg.bun = addIngradient.ingradient;
      }
      if (addIngradient.ingradient.type != "bun") {
        newBurg.ingradients.push(addIngradient);
      }
      dispatch({
        type: addBurger,
        payload: newBurg,
      });
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
          text={newBurgerOrder.newBurger.bun.name + " (верх)"}
          price={newBurgerOrder.newBurger.bun.price}
          thumbnail={newBurgerOrder.newBurger.bun.image_mobile}
          key={newBurgerOrder.newBurger.bun._id}
        />
      </div>
      <div className={`custom-scroll ${styles.burgerConstructorList}`} >
        {newBurgerOrder.newBurger.ingradients.map((item, index) => {
          return (
            <BurgerList card={item} index={index} key={item.id}></BurgerList>
          );
        })}
      </div>

      <div className={`mb-4 mt-4 pl-8 mr-7 ${styles.bun}`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={newBurgerOrder.newBurger.bun.name + " (низ)"}
          price={newBurgerOrder.newBurger.bun.price}
          thumbnail={newBurgerOrder.newBurger.bun.image_mobile}
          key={newBurgerOrder.newBurger.bun._id}
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
          <OrderDetails number={0} />
        </Modal>
      )}
    </section>
  );
}
export default BurgerConstructor;

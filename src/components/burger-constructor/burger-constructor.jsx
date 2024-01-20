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
import { getNewBurgerSelector } from "../store/action-selector";

import { addBurger } from "../store/newburger-slice";
import { useDrop } from "react-dnd";

import { newBurgerone } from "../../utils/data";
import OrderError from "../order-error/order-error";

let ok = "true";
let okOne = "Идентификатор заказа";
let okTwo = "Ваш заказ начали готовить";
let okThree = "Дождитесь готовности на орбитальной странции";

function BurgerConstructor() {
  const dispatch = useDispatch();

  const newBurgerOrder = useSelector(getNewBurgerSelector);

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
      if (newBurgerOrder.newBurger.bun.price === 0) {
        okOne = "Пожалуйста, добавьте булочку к заказу";
        okTwo = "Мы начнем готовить, как только получим заказ";
        okThree = "Не торопитесь, выбирайте с умом";
        setModalErrorOpen(true);
      } else setModalOpen(true);
    }
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

      dispatch(addBurger(newBurg));
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
      <div className={`custom-scroll ${styles.burgerConstructorList}`}>
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
          <OrderDetails number={0} one={okOne} two={okTwo} three={okThree} />
        </Modal>
      )}

      {isModalErrorOpen && (
        <Modal onClose={onCloseError}>
          <OrderError number={0} one={okOne} two={okTwo} three={okThree} />
        </Modal>
      )}
    </section>
  );
}
export default BurgerConstructor;

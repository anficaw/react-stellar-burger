import React from "react";
import styles from "./order-details.module.css";
import icon from "../../images/successIcon.svg";

function OrderDetails({ number }) {
  return (
    <section className={styles.orderDetails}>
      <p className="mt-30 text text_type_digits-large">{number}</p>
      <p className=" mt-8 mb-15 text text_type_main-medium">
        Идентификатор заказа
      </p>
      <img src={icon} alt="Галка" />
      <p className=" mt-15 text text_type_main-small">
        Ваш заказ начали готовить
      </p>
      <p className=" mt-2 mb-30 text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной странции
      </p>
    </section>
  );
}
export default OrderDetails;

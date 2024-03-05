import React, { useEffect } from "react";
import styles from "./one-order.module.css";
import { useParams, useLocation, useNavigate, Navigate } from "react-router-dom";
import { getOrderNew } from "../../store/action-selector";
import { useAppDispatch, useAppSelector } from "../../types/hook";
import Modal from "../../components/modal/modal";
import { OrderString } from "../../types";
import Order from "../../components/order/order";
import { fetchOrdernew } from "../../store/ordernew-slice";
import { fetchListnew } from "../../store/ingredients-slicenew";

function OneOrder() {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state;
  const { orderId } = useParams();
  const dispatch = useAppDispatch();
  const orderNumber: OrderString = {
    order: "",
  };

  if (orderId) {
    orderNumber.order = orderId;
  }

  useEffect(() => {
    dispatch(fetchOrdernew(orderNumber));
    dispatch(fetchListnew());
  }, []);

  const ordernew = useAppSelector(getOrderNew);

  if (ordernew === null) {
    return null;
  }

  const onClose = () => {
       navigate("/feed");
      
  };

  const onBack = () => {
    navigate(location.state.from.pathname);
    
  };

  if (background) {
    return (
      <div>
        <Modal onClose={onClose}>
          <Order order={ordernew} />
        </Modal>
      </div>
    );
  } else {
    return (
      <div className={styles.oneorder}>
        <Order order={ordernew} />
      </div>
    );
  }
}

export default OneOrder;

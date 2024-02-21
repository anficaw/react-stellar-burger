import React, { useEffect, ReactNode} from "react";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal overlay";

const modalElement = document.getElementById("modal") as HTMLElement;

type TModalprops = {
  onClose: () => void;
  children: ReactNode;
   
}

function Modal(props:TModalprops) {
  useEffect(() => {
    function onEsc(evt:KeyboardEvent) {
      if (evt.code === "Escape") {
        props.onClose();
      }
    }

    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  return createPortal(
    <>
      <div className={styles.modal}>
        <button className={styles.closeIcon} onClick={props.onClose}>
          <CloseIcon type="primary" />
        </button>

        {props.children}
      </div>
      <ModalOverlay onClose={props.onClose} />
    </>,
    modalElement
  );
}
export default Modal;

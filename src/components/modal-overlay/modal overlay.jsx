import React from "react";
import styles from "./modal-overlay.module.css";

function ModalOverlay({ onClose }) {
  return (
    <section
      className={`  ${styles.modaloverlay}`}
      onClick={onClose}
    ></section>
  );
}
export default ModalOverlay;

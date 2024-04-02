import React from "react";
import AppHeader from "../app-header/app-header";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";

function LayOut() {
  return (
    <div className={styles.layout}>
      <AppHeader />

      <Outlet />
    </div>
  );
}

export default LayOut;

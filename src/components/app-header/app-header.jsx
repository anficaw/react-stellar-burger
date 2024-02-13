import React from "react";
import styles from "./app-header.module.css";
import LinkHeader from "../link-header/link-header";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header className={styles.appheader}>
      <div className={styles.headerblockleft}>
        <LinkHeader name="Конструктор" icon={BurgerIcon} to='/' />
        <div className="ml-2">
        <LinkHeader name="Лента заказов" icon={ListIcon} to='/profile/orders' />
        </div>
      </div>
      <div className={styles.headerblockcentr}>
        <Logo />
      </div>
      <div className={styles.headerblockright}>
        <LinkHeader name="Личный кабинет" icon={ProfileIcon} to='/profile' />
      </div>
    </header>
  );
}
export default AppHeader;

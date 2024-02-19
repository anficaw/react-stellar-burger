import React, { useState } from "react";
import LinkProfile from "../link-profile/link-profile";
import styles from "./profile-header.module.css";

 
function ProfileHeader() {
  
 return (     
    <div className={styles.profile}>
      <menu className={styles.menu}>
        <LinkProfile name="Профиль" to="/profile"></LinkProfile>
        <LinkProfile name="История заказов" to="/profile/orders"></LinkProfile>
        <LinkProfile name="Выход" to="/exit"></LinkProfile>

        <p className="mt-20 text text_type_main-default text_color_inactive">
          В этом разделе вы можете          изменить свои персональные данные</p>
      </menu>
    </div>
  );
}

export default ProfileHeader;




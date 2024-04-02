import React from "react";
import AppHeader from "../app-header/app-header";
import { Outlet } from "react-router-dom";
import styles from "./layout-profile.module.css";
import ProfileHeader from "../profile-header/profile-header";

function LayOutProfile() {
  return (
    <div className={styles.layoutprofile}>
      <ProfileHeader />

      <Outlet />
    </div>
  );
}

export default LayOutProfile;

import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";

import { fetchList } from "../../store/ingradients-slice";
import NotFound from "../../pages/not-found/not-found";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import Login from "../../pages/login/login";
import Profile from "../../pages/profile/profile";
import Register from "../../pages/register/register";
import ResetPassword from "../../pages/reset-password/reset-password";
import LayOut from "../layout/layout";
import SingleIngredient from "../../pages/single-ingredient/single-ingredient";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Main />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ingredients/:ingId" element={<SingleIngredient />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;

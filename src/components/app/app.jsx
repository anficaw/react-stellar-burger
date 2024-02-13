import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import { useEffect } from "react";
import { Routes, Route,useLocation, Navigate } from "react-router-dom";

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
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import Orders from "../../pages/orders/orders";
import { checkUserAuth } from "../../store/action";
import Exit from "../../pages/exit/exit";

function App() {
  const dispatch = useDispatch();

 useEffect(() => {
    dispatch(fetchList());
    dispatch(checkUserAuth())
  }, []);

  const location = useLocation();
  const background = location.state && location.state.background;
  
    return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Main />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
          <Route path="/profile/orders" element={<OnlyAuth component={<Orders />} />}/>
          <Route path="/profile" element={<OnlyAuth component={<Profile />} />} />
          <Route path="/exit" element={<OnlyAuth component={<Exit />} />} />
          <Route path="/register" element={<OnlyUnAuth component={<Register />} />} />
          <Route path="/ingredients/:ingId" element={<SingleIngredient />} />
          <Route path="/resetpassword" element={<OnlyUnAuth component={<ResetPassword />} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
/*<Route path="/login" element={<OnlyUnAuth component={<Login />} />} />*/
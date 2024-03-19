import styles from "./app.module.css";
import Main from "../main/main";
import { useEffect } from "react";
import { Routes, Route,useLocation, Navigate } from "react-router-dom";
import { useAppDispatch } from "../../types/hook";
import { fetchList } from "../../store/ingredients-slice";
import NotFound from "../../pages/not-found/not-found";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import Login from "../../pages/login/login";
import Profile from "../../pages/profile/profile";
import Register from "../../pages/register/register";
import ResetPassword from "../../pages/reset-password/reset-password";
import LayOut from "../layout/layout";
import SingleIngredient from "../../pages/single-ingredient/single-ingredient";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import OrdersUser from "../../pages/orders-user/orders-user";
import { checkUserAuth, getUser } from "../../store/action";
import Exit from "../../pages/exit/exit";
import LayOutProfile from "../layout-profile/layout-profile";
import ListOrders from "../../pages/list-orders/list-orders";
import OneOrder from "../../pages/one-order/one-order";
import OrderUser from "../../pages/order-user/order-user";
import { useAppSelector } from "../../types/hook";
import { getconnectActive } from "../../store/action-selector";

function App() {
  const dispatch = useAppDispatch();

 useEffect(() => {
    dispatch(fetchList());
   // dispatch(getUser());
    dispatch(checkUserAuth()) 
  }, []);

  const location = useLocation();
  const background = location.state && location.state.background;

    return (

    <div className={styles.app}>
      <Routes location={background || location}>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Main />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
          <Route path="/feed" element={<ListOrders />}/>
          <Route path="/feed/:orderId" element={<OneOrder />}/>
          <Route path="/profile" element={<OnlyAuth component={<LayOutProfile />} />}>
              <Route path="/profile" element={<Profile />} /> 
              <Route path="/profile/orders" element={<OrdersUser />}/>                
          </Route>
          <Route path="/profile/orders/:orderuserId" element={<OrderUser />}/>
          <Route path="/exit" element={<OnlyAuth component={<Exit />} />} />
          <Route path="/register" element={<OnlyUnAuth component={<Register />} />} />
          <Route path="ingredients/:ingId" element={<SingleIngredient />} />
          <Route path="/resetpassword" element={<OnlyUnAuth component={<ResetPassword />} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
           <Route path="ingredients/:ingId" element={<SingleIngredient />} />
           <Route path="/feed/:orderId" element={<OneOrder />}/>
           <Route path="/profile/orders/:orderuserId" element={<OrderUser />}/>
        </Routes>  
)}



    </div>
  );
}

export default App;


/*return (
  <div className={styles.app}>
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route path="/" element={<Main />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
        <Route path="/feed" element={<ListOrders />}/>
        <Route path="/feed/:orderId" element={<OneOrder />}/>

        
        <Route path="/profile/orders/id" element={<OnlyAuth component={<OrderUser />} />}/>

        <Route path="/profile" element={<OnlyAuth component={<LayOutProfile />} />}>
            <Route path="/profile" element={<Profile />} /> 
            <Route path="/profile/orders" element={<OrdersUser />}/>
        
        </Route>
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

export default App;*/

/*const connect = useAppSelector(getconnectActive);
console.log('1111111111111111111');
console.log(connect);
console.log(location);
if (connect === 'ONLINE' && location.pathname !=="/feed"){
   dispatch(disconnectOrders());
 }*/

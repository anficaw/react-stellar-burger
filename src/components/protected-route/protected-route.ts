import { Navigate, useLocation } from "react-router-dom";
import React, { FunctionComponent, useEffect } from "react";
import { setAuthChecked } from "../../store/user-slice";
import { checkUserAuth } from "../../store/action";
import { useAppDispatch,useAppSelector } from "../../types/hook";

type ТProtectedprops = {
  onlyUnAuth:boolean,
  component:FunctionComponent,
}

const Protected = (props:ТProtectedprops) => {
    
  const isAuthChecked  = useAppSelector((store) => store.user.isAuthChecked);
  const user = useAppSelector((store) => store.user.user);
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAuthChecked(false))
    dispatch(checkUserAuth())
  },[dispatch])

  
  if (!isAuthChecked) {
    // Запрос еще выполняется
    return null; // или прелоадер
  }

  if (props.onlyUnAuth && user) {
    
    // Пользователь авторизован, но запрос предназначен только для неавторизованных пользователей
    // Нужно сделать редирект на главную страницу или на тот адрес, что записан в location.state.from
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!props.onlyUnAuth && !user) {
    // Сервер не ответил
    return <Navigate to="/login" state={{ from: location }} />;
  }
  // !onlyUnAuth && user
  return component;
};

export const OnlyAuth = (props) => <Protected onlyUnAuth={false} {...props} />;
export const OnlyUnAuth = (props) => <Protected onlyUnAuth={true} {...props} />;
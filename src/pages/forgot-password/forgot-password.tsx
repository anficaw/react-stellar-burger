import React, { useState } from "react";
import styles from "./forgot-password.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import LinLogin from "../../components/link-login/link-login";
import { useAppDispatch,useAppSelector } from "../../types/hook";
import { fogot } from "../../store/action";
import { useNavigate } from "react-router-dom";
const user = {};

function ForgotPassword() {
  const [email, setEmail] = useState("anficaw@mail.ru");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const setValueEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    dispatch(fogot(email));
    navigate("/resetpassword");
  };

  return (
    <div className={styles.forgotPassword}>
      <form className={styles.userForm} onSubmit={onSubmit}>
        <p className="text text_type_main-medium">Восстановление пароля</p>

        <Input
          type="email"
          placeholder="Логин"
          onChange={setValueEmail}
          /*icon={"EditIcon"}*/
          value={email}
          name={"login"}
          error={false}
          /*ref={inputRef}*/
          /*onIconClick={onIconClick}*/
          errorText={"Ошибка в логине"}
          size={"default"}
          extraClass="ml-1 mt-6"
        />

        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mt-6 mb-20"
           
        >
          Восстановить
        </Button>

        <LinLogin to="/login" qwest="Вспомнили пароль?" text="Войти"></LinLogin>
      </form>
    </div>
  );
}

export default ForgotPassword;

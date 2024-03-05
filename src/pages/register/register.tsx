import React, { useState } from "react";
import styles from "./register.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import LinLogin from "../../components/link-login/link-login";
import { useAppDispatch,useAppSelector } from "../../types/hook";
import { registration } from "../../store/action";

function Register() {
  const [email, setEmail] = useState("anficaw@mail.ru");
  const [password, setPassword] = useState("****");
  const [name, setName] = useState("Mark");

  const dispatch = useAppDispatch();

  const setValueEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const setValuePassWord = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  const setValueName = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };

  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    dispatch(registration(email, password, name));
  };

  return (
    <div className={styles.register}>
      <form className={styles.userForm} onSubmit={onSubmit}>
        <p className="text text_type_main-medium">Регистрация</p>
        <Input
          type="text"
          placeholder="Имя"
          onChange={setValueName}
          /*icon={"EditIcon"}*/
          value={name}
          name={"name"}
          error={false}
          /*ref={inputRef}*/
          /*onIconClick={onIconClick}*/
          errorText={"Ошибка в имени"}
          size={"default"}
          extraClass="ml-1 mt-6"
        />

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
        <Input
          type="password"
          placeholder="Пароль"
          onChange={setValuePassWord}
          icon={"ShowIcon"}
          value={password}
          name={"name"}
          error={false}
          /*ref={inputRef}*/
          /*onIconClick={onIconClick}*/
          errorText={"Ошибка в пароле"}
          size={"default"}
          extraClass="ml-1 mt-6"
        />

        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mt-6 mb-20"
     
        >
          Зарегистрироваться
        </Button>

        <LinLogin
          to="/login"
          qwest="Уже зарегистрированы?"
          text="Войти"
        ></LinLogin>
      </form>
    </div>
  );
}

export default Register;

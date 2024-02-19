import React, { useState } from "react";
import styles from "./reset-password.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import LinLogin from "../../components/link-login/link-login";
import { useDispatch } from "react-redux";
import { resetPass } from "../../store/action";

function ResetPassword() {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const setValueCode = (evt: any) => {
    setCode(evt.target.value);
  };

  const setValuePassWord = (evt: any) => {
    setPassword(evt.target.value);
  };

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    dispatch(resetPass(code, password));
  };

  return (
    <div className={styles.resetPassword}>
      <form className={styles.userForm} onSubmit={onSubmit}>
        <p className="text text_type_main-medium">Восстановление пароля</p>

        <Input
          type="password"
          placeholder="Введите новый пароль"
          onChange={setValuePassWord}
          /*icon={"ShowIcon"}*/
          value={password}
          name={"password"}
          error={false}
          /*ref={inputRef}*/
          /*onIconClick={onIconClick}*/
          errorText={"Ошибка в пароле"}
          size={"default"}
          extraClass="ml-1 mt-6"
        />

        <Input
          type="text"
          placeholder="Введите код из письма"
          onChange={setValueCode}
          /*icon={"ShowIcon"}*/
          value={code}
          name={"code"}
          error={false}
          /*ref={inputRef}*/
          /*onIconClick={onIconClick}*/
          errorText={"Ошибка в пароле"}
          size={"default"}
          extraClass="ml-1 mt-6"
        />

        <Button
          htmlType="button"
          type="primary"
          size="medium"
          extraClass="mt-6 mb-20"
          onClick={onSubmit}
        >
          Сохранить
        </Button>

        <LinLogin to="/login" qwest="Вспомнили пароль?" text="Войти"></LinLogin>
      </form>
    </div>
  );
}

export default ResetPassword;

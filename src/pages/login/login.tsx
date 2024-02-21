import React, { useState } from "react";
import { Input,
    Button} from "@ya.praktikum/react-developer-burger-ui-components";
import { login } from "../../store/action";
import LinLogin from "../../components/link-login/link-login";
import styles from "./login.module.css";
import { useDispatch } from "react-redux";

function Login() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 
 const dispatch = useDispatch();

  const setValueEmail = (evt: React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(evt.target.value)
  }

  const setValuePassWord = (evt: React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(evt.target.value)
  }

 const onSubmit = (evt: React.FormEvent) =>{
  evt.preventDefault();
  dispatch(login(email, password));

 }

    return (
        <div className={styles.login}>
         <form className={styles.login} onSubmit={onSubmit}>
            <p className="text text_type_main-medium">Вход</p>
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
        <Button htmlType="submit" type="primary" size="medium" extraClass="mt-6 mb-20">
          Войти
        </Button>

        </form>
             <LinLogin
             to="/register" 
             qwest="Вы - новый пользователь?" 
             text="Зарегистрироваться"></LinLogin>
             <LinLogin
             to="/forgotpassword" 
             qwest="Забыли пароль?" 
             text="Восстановить пароль"></LinLogin>
  
        </div>
    )
}

export default Login
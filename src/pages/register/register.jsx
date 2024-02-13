
import React, { useState } from "react";
import LinkProfile from "../../components/link-profile/link-profile";
import styles from "./register.module.css";
import { Input,
    Button} from "@ya.praktikum/react-developer-burger-ui-components";
import LinLogin from "../../components/link-login/link-login";
import { useDispatch } from "react-redux";
import { registration } from "../../store/action";


function Register() {

 const [email, setEmail] = useState('anficaw@mail.ru');
 const [password, setPassword] = useState('****');
 const [name, setName] = useState('Mark');

 const dispatch = useDispatch();

  const setValueEmail = (evt) =>{
    setEmail(evt.target.value)
  }

  const setValuePassWord = (evt) =>{
    setPassword(evt.target.value)
  }

  const setValueName = (evt) =>{
    setName(evt.target.value)
  }

 const onClick = () =>{
  dispatch(registration(email, password, name));
 }


  return (
    
    <div className={styles.register}>
      
      <form className={styles.userForm}>
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
        
        <Button htmlType="button" type="primary" size="medium" extraClass="mt-6 mb-20" onClick={onClick}>
          Зарегистрироваться
        </Button>

        <LinLogin
             to="/login" 
             qwest="Уже зарегистрированы?" 
             text="Войти"></LinLogin>
         

      </form>
    </div>
  );
}

export default Register;

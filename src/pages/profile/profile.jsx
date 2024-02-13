import React, { useState } from "react";
import LinkProfile from "../../components/link-profile/link-profile";
import styles from "./profile.module.css";
import { Input,
    Button} from "@ya.praktikum/react-developer-burger-ui-components";
import { getUserActive } from "../../store/action-selector";
import { redact } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
 
function Profile() {
  const user = useSelector(getUserActive);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [name, setName] = useState(user.name);

  const dispatch = useDispatch();

  const setValueEmail = (evt) =>{
    setEmail(evt.target.value)
  };

  const setValuePassWord = (evt) =>{
    setPassword(evt.target.value)
  };

  const setValueName = (evt) =>{
    setName(evt.target.value)
  };

 const onClick = () =>{
    dispatch(redact(email, name));
 };

 const onClickCansel = () =>{
   const inputname = document.getElementById('name');
   const inputemail = document.getElementById('login');
   console.log(inputname);
   console.log(inputemail);

   inputname.setAttribute ("value",user.name);
   inputemail.setAttribute ("value",user.email);
   inputname.value = user.name;
   inputemail.value = user.email;
       
 };


 return (     
    <div className={styles.profile}>
      <menu className={styles.menu}>
        <LinkProfile name="Профиль" to="/profile"></LinkProfile>
        <LinkProfile name="История заказов" to="/profile/orders"></LinkProfile>
        <LinkProfile name="Выход" to="/exit"></LinkProfile>

        <p className="mt-20 text text_type_main-default text_color_inactive">
          В этом разделе вы можете          изменить свои персональные данные</p>
      </menu>
      <form className={styles.userForm}>
        <Input
          type="text"
          placeholder="Имя"
          /*onChange={(e) => setValue(e.target.value)}*/
          onChange={setValueName}
          icon={"EditIcon"}
          value={name}
          name={"name"}
          error={false}
          id="name"
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
       
          icon={"EditIcon"}
          value={email}
          name={"login"}
          id="login"
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
           
          icon={"EditIcon"}
          value={password}
          name={"passworld"}
          error={false}
          /*ref={inputRef}*/
          /*onIconClick={onIconClick}*/
          errorText={"Ошибка в пароле"}
          size={"default"}
          extraClass="ml-1 mt-6"
        />
        <div className={styles.buttons}>
        <Button htmlType="button" type="secondary" size="large" extraClass="mt-6" onClick={onClickCansel}>
          Отмена
        </Button>

        <Button htmlType="button" type="primary" size="medium" extraClass="mt-6" onClick={onClick}>
          Сохранить
        </Button>
        </div>
       


      </form>
    </div>
  );
}

export default Profile;

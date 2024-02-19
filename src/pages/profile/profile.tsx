import React, { useState } from "react";
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

  const setValueEmail = (evt: any) =>{
    setEmail(evt.target.value)
  };

  const setValuePassWord = (evt: any) =>{
    setPassword(evt.target.value)
  };

  const setValueName = (evt: any) =>{
    setName(evt.target.value)
  };

 const onClickCansel = () =>{
   
   setEmail(user.email);
   setName(user.name)
       
 };

 const onSubmit = (evt: any) =>{
  evt.preventDefault();
  dispatch(redact(email, name));
   
 }

 return (     
    <div className={styles.profile}>
      
      <form className={styles.userForm} onSubmit={onSubmit}>
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

        <Button htmlType="button" type="primary" size="medium" extraClass="mt-6" onClick={onSubmit}>
          Сохранить
        </Button>
        </div>
       


      </form>
    </div>
  );
}

export default Profile;

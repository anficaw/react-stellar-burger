import React, { useState } from "react";
import styles from "./profile.module.css";
import { Input,
    Button} from "@ya.praktikum/react-developer-burger-ui-components";
import { getUserActive } from "../../store/action-selector";
import { redact } from "../../store/action";
import { useAppDispatch,useAppSelector } from "../../types/hook";
import { TUser } from "../../types";
import { string } from "prop-types";
 
function Profile() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserActive);
  let useremail ='';
  let username ='';

  if (user) {
     useremail =user.email;
     username =user.name;
    };
  

  const [email, setEmail] = useState(useremail);
  const [password, setPassword] = useState('');
  const [name, setName] = useState(username);

  
  
  const setValueEmail = (evt: React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(evt.target.value)
  };

  const setValuePassWord = (evt:React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(evt.target.value)
  };

  const setValueName = (evt: React.ChangeEvent<HTMLInputElement>) =>{
    setName(evt.target.value)
  };

 const onClickCansel = () =>{
  if (user) {
    setEmail(user.email);
    setName(user.name);
   }
      
 };

 const onSubmit = (evt: React.FormEvent) =>{
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

        <Button htmlType="submit" type="primary" size="medium" extraClass="mt-6">
          Сохранить
        </Button>
        </div>
       


      </form>
    </div>
  );
}

export default Profile;

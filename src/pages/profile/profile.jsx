import React from "react";
import LinkProfile from "../../components/link-profile/link-profile";
import styles from "./profile.module.css";
import { Input,
    Button} from "@ya.praktikum/react-developer-burger-ui-components";

const user={};

function Profile() {
  return (
    
    <div className={styles.profile}>
      <menu className={styles.menu}>
        <LinkProfile name="Профиль" to="/profile"></LinkProfile>
        <LinkProfile name="История заказов" to="/profile/orders"></LinkProfile>
        <LinkProfile name="Выход" to="/"></LinkProfile>

        <p className="mt-20 text text_type_main-default text_color_inactive">
          В этом разделе вы можете          изменить свои персональные данные</p>
      </menu>
      <form className={styles.userForm}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          /*onChange={(e) => setValue(e.target.value)}*/
          icon={"EditIcon"}
          value={"Марк"}
          name={"name"}
          error={false}
          /*ref={inputRef}*/
          /*onIconClick={onIconClick}*/
          errorText={"Ошибка в имени"}
          size={"default"}
          extraClass="ml-1 mt-6"
        />

        <Input
          type={"email"}
          placeholder={"Логин"}
          /*onChange={(e) => setValue(e.target.value)}*/
          icon={"EditIcon"}
          value={"email@mail.ru"}
          name={"login"}
          error={false}
          /*ref={inputRef}*/
          /*onIconClick={onIconClick}*/
          errorText={"Ошибка в логине"}
          size={"default"}
          extraClass="ml-1 mt-6"
        />
       <Input
          type={"password"}
          placeholder={"Пароль"}
          /*onChange={(e) => setValue(e.target.value)}*/
          icon={"EditIcon"}
          value={"*****"}
          name={"name"}
          error={false}
          /*ref={inputRef}*/
          /*onIconClick={onIconClick}*/
          errorText={"Ошибка в пароле"}
          size={"default"}
          extraClass="ml-1 mt-6"
        />
        <div className={styles.buttons}>
        <Button htmlType="button" type="secondary" size="large" extraClass="mt-6">
          Отмена
        </Button>

        <Button htmlType="button" type="primary" size="medium" extraClass="mt-6">
          Сохранить
        </Button>
        </div>
       


      </form>
    </div>
  );
}

export default Profile;

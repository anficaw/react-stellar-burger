import React, { useState } from "react";
import { Input,
    Button} from "@ya.praktikum/react-developer-burger-ui-components";
import { exit, login, redact } from "../../store/action";
import LinLogin from "../../components/link-login/link-login";
import styles from "./exit.module.css";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserActive } from "../../store/action-selector";

function Exit() {
    const user = useSelector(getUserActive);
    const dispatch = useDispatch();

    const onClick = () =>{
        dispatch(exit());
       }
       return (
        <div className={styles.exit}>
        <Button onClick={onClick} htmlType="button" type="primary" size="medium" extraClass="mt-6 mb-20">
          Уверны, что хотите выйти?
        </Button>
             
        </div>
    )
}

export default Exit
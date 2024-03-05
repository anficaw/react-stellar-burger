import React from "react";
import dog from "../../images/20230903_190752.jpg";
import styles from "./not-found.module.css";


function NotFound() {
    return (
        <div className={styles.notFound}>
            <img src={dog} alt="Просто собачка" />
        </div>
    )
}

export default NotFound
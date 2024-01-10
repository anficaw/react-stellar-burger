import styles from "./app.module.css";
import React from "react";
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import { useEffect, useState } from "react";
import {sait} from "../../utils/data"

function App() {
  const [cards, setCards] = useState([]);

  const getCard = () => {
     
    fetch(sait)
      .then((res) => res.json())
      .then((data) => {
         
        setCards(data.data);
      })
 
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCard();
     
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Main cards={cards} />
    </div>
  );
}

export default App;

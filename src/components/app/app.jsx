import styles from "./app.module.css";
import React from "react";
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState([]);

  const getCard = () => {
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => res.json())
      .then((data) => {
        console.dir(data);
        console.log("111111");
        setCards(data.data)})

      .catch((err) => console.log(err));
  };
   
  React.useEffect(() => {
   console.dir(cards);
}, [cards]);

 
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

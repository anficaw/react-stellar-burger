import { useSelector } from "react-redux";
import { sait } from "./data";
import { saitOrder } from "./data";

const config = {
  
  headers: {
    authorization: "5b991593-2d40-406d-bb45-a04e21468b74",
    "Content-Type": "application/json",
  },
};



export const getCard = () => {
    return fetch(sait)
      .then((res) => {
                  if (res.ok) {
                    return res.json();
                  }
                    return Promise.reject(`ошибка ${res.status}`);
                                       
                    })
    
       .catch((err) => console.log(err));
  };

  
  export const getOrder = (newBurgerID) => {
          
    return fetch(saitOrder, {
      headers: config.headers,
      method: "POST",
      body: JSON.stringify(newBurgerID),
         })
        .then((res) => {
         if (res.ok) {
          return res.json();
         }
    // если ошибка, отклоняем промис
          return Promise.reject(`Ошибка: ${res.status}`);
        })

        .catch((err) => console.log(err)); 
       };

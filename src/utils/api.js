import { useDispatch, useSelector } from "react-redux";
import { sait } from "./data";
import { saitOrder } from "./data";

const config = {
  headers: {
    authorization: "5b991593-2d40-406d-bb45-a04e21468b74",
    "Content-Type": "application/json",
  },
};

function checkResponse(res) {
      if (res.ok) {
      return res.json();
    }
    return Promise.reject(`ошибка ${res.status}`);

}


export const getIngredients= () => {
  return fetch(sait)
    .then(checkResponse)
    /*.catch((err) => console.log(err));*/
};

export const getOrder = (newBurgerID) => {
  return fetch(saitOrder, {
    headers: config.headers,
    method: "POST",
    body: JSON.stringify(newBurgerID),
  })
    .then(checkResponse)
    /*.catch((err) => console.log(err));*/
};

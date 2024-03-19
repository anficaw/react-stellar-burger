
import { sait } from "./data";
import { saitOrder} from "./data";
import {ТnewBurgerID} from '../types';
 
const config = {
  headers: {
    authorization: "5b991593-2d40-406d-bb45-a04e21468b74",
    "Content-Type": "application/json",
  },
};


 
export function checkResponse(res:Response) {
      if (res.ok) {
      return res.json();
    }
    return Promise.reject(`ошибка ${res.status}`);
}


export const getIngredients= () => {
  return fetch(sait)
    .then(checkResponse)   
};

export const getOrdernew = (orderNumber:string) => {
 const saitorder:string = saitOrder+"/"+orderNumber;
  return fetch(saitorder)
    .then(checkResponse)   
};


export const getOrder = (newBurgerID:ТnewBurgerID) => {
  
  let authorizationm = localStorage.getItem("accessToken")
  if ( authorizationm === null){
       console.log('не нкшли ')
        authorizationm = "5b991593-2d40-406d-bb45-a04e21468b74"  
      }
  
  const confign = {
    headers: {
      authorization: authorizationm,
      "Content-Type": "application/json",
        },}
  return fetch(saitOrder, {
    headers: confign.headers,
    method: "POST",
    body: JSON.stringify(newBurgerID),
  })
    .then(checkResponse)
    
};


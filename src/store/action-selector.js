import { v4 as uuid } from 'uuid';
import { setAuthChecked, setUser } from "./user-slice";
import { getuplogin } from '../utils/api';

export const getIngredientSelector = (store) => store.ingredient.ingredient;

export const getUserActive = (store) => store.user.user;

/*export const getUserMessage = (store) => store.user.isSentMessage;*/

export const getOrderSelector = (store) =>{
  const error = store.order.errorOrder;
  const listload = store.order.orderisLoad;
  const order = store.order.order;
   
  if (listload === false) {
    console.log("Идет загрузка заказа и получение номера");
    if (error === true) {
      console.log(error);
      console.log("какая то ошибка");
    }}
   else {
    console.log("получили");  
  }
  return order;
};

export const getIngredientsSelector = (store) => {
  const error = store.ingredients.errorIngr;
  const listload = store.ingredients.isLoad;
  const ingredientList = store.ingredients.ingredientList;
  
  const ingradienstList = [];
  const newBurger = store.newBurger.newBurger;

  if (listload === false) {
    console.log("Идет загрузка ингредиентов");
    if (error === true) {
      console.log(error);
    }
  } else {
    ingredientList.forEach((item) => {
        let number = 0;
        newBurger.ingredients.map((element) => {
         if (element.ingredient === item){
          number = number + 1;
         } });
      if (newBurger.bun.ingredientbun === item){
        number = number + 1;
      }

       ingradienstList.push({        
        number: number,
        id: 1,
        ingredient: item,
      });
    });
  }
   
  return ingradienstList;
};

export const getNewBurgerSelector = (store) => {
  const NewBurgerID = [];
  const NewBurger = store.newBurger.newBurger;
  
  let summ = NewBurger.bun.ingredientbun.price + NewBurger.bun.ingredientbun.price;
  
  NewBurgerID.push(NewBurger.bun.ingredientbun._id);
  {
    NewBurger.ingredients.map((item) => {
      summ = summ + item.ingredient.price;
      NewBurgerID.push(item.ingredient._id);
    });
  }
  const NewBurgerConstructor = {
    newBurger: NewBurger,
    newBurgerCost: summ,
    newBurgerID: NewBurgerID,
    
  };
  
  return NewBurgerConstructor;
};


export const getIngredientsSelectornew = (store) => {
  const error = store.ingredientsnew.errorIngr;
  const listload = store.ingredientsnew.isLoad;
  const ingredientList= store.ingredientsnew.ingredientList;
  
  const ingradienstList = [];
   
  if (listload === false) {
    console.log("Идет загрузка ингредиентов в другое хранилище");
    if (error === true) {
      console.log(error);
    }
  } else {
    ingredientList.forEach((item) => {
        ingradienstList.push({        
        number: 0,
        id: 1,
        ingredient: item,
      });
    });
  }
   return ingradienstList;
};


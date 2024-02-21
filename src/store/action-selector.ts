import { RootState } from ".";
import { TIngredients } from "../types";


export const getIngredientSelector = (store:RootState) => store.ingredient.ingredient;

export const getUserActive = (store:RootState) => store.user.user;

/*export const getUserMessage = (store) => store.user.isSentMessage;*/

export const getOrderSelector = (store:RootState) =>{
  const error = store.order.errorOrder;
  const listload = store.order.orderisLoad;
  const order = store.order.order;
   
  if (listload === false) {
    console.log("Идет загрузка заказа и получение номера");
    if (error === "error") {
      console.log(error);
      console.log("какая то ошибка");
    }}
   else {
    console.log("получили");  
  }
  return order;
};

export const getIngredientsSelector = (store:RootState) => {
  const error = store.ingredients.errorIngr;
  const listload = store.ingredients.isLoad;
  const ingredientList = store.ingredients.ingredientList;
  
  const ingradienstList:TIngredients[] = [];
  const newBurger = store.newBurger.newBurger;

  if (listload === false) {
    console.log("Идет загрузка ингредиентов");
    if (error === "error") {
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
        id:' 1',
        ingredient: item,
      });
    });
  }
   
  return ingradienstList;
};

export const getNewBurgerSelector = (store:RootState) => {
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


export const getIngredientsSelectornew = (store:RootState) => {
  const error = store.ingredientsnew.errorIngr;
  const listload = store.ingredientsnew.isLoad;
  const ingredientList= store.ingredientsnew.ingredientList;
  
  const ingradienstList:TIngredients[] = [];
   
  if (listload === false) {
    console.log("Идет загрузка ингредиентов в другое хранилище");
    if (error === "error") {
      console.log(error);
    }
  } else {
    ingredientList.forEach((item) => {
        ingradienstList.push({        
        number: 0,
        id:' 1',
        ingredient: item.ingredient,
      });
    });
  }
   return ingradienstList;
};


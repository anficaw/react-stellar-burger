import { v4 as uuid } from 'uuid';

export const getIngradientSelector = (store) => store.ingradient.ingradient;

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

export const getIngradientsSelector = (store) => {
  const error = store.ingradients.errorIngr;
  const listload = store.ingradients.isLoad;
  const ingradientList = store.ingradients.ingradientList;
  
  const ingradienstList = [];
  const newBurger = store.newBurger.newBurger;

  if (listload === false) {
    console.log("Идет загрузка ингредиентов");
    if (error === true) {
      console.log(error);
    }
  } else {
    ingradientList.forEach((item) => {
        let number = 0;
        newBurger.ingradients.map((element) => {
         if (element.ingradient === item){
          number = number + 1;
         } });
      if (newBurger.bun.ingradientbun === item){
        number = number + 1;
      }

       ingradienstList.push({        
        number: number,
        id: 1,
        ingradient: item,
      });
    });
  }
   
  return ingradienstList;
};

export const getNewBurgerSelector = (store) => {
  const NewBurgerID = [];
  const NewBurger = store.newBurger.newBurger;
  
  let summ = NewBurger.bun.ingradientbun.price + NewBurger.bun.ingradientbun.price;
  
  NewBurgerID.push(NewBurger.bun.ingradientbun._id);
  {
    NewBurger.ingradients.map((item) => {
      summ = summ + item.ingradient.price;
      NewBurgerID.push(item.ingradient._id);
    });
  }
  const NewBurgerConstructor = {
    newBurger: NewBurger,
    newBurgerCost: summ,
    newBurgerID: NewBurgerID,
    
  };
  
  return NewBurgerConstructor;
};

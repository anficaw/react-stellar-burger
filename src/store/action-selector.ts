import { RootState } from ".";
import { TIngredients,TOrder, TIngredient,TOrderIngredient } from "../types";


export const getIngredientSelector = (store:RootState) => store.ingredient.ingredient;
export const getconnectActive = (store:RootState) => store.orders.status;
export const getUserActive = (store:RootState) => store.user.user;
export const getUserReg = (store:RootState) => store.user.isAuthChecked;
//export const getOrderNew = (store:RootState) => store.ordernew.order;
//********************************************************************* */
export const getOrderNew = (state: RootState) => {

  const ordernew = state.ordernew.order;
  const cardsnew = state.ingredients.ingredientList;
  
  
   if (ordernew ===null){
    return null;
   }
  
     const ingradString = ordernew.ingredients;
     let ingredientsinorder:TOrderIngredient[]=[];
     
     
     let summa = 0;
     {ingradString.map((element) => 
        {
         let ingredientinorder:TIngredient|undefined; 
         let ingredientinordertwo:TOrderIngredient|undefined; 

         ingredientinorder = cardsnew.find(el => el._id === element);
         ingredientinordertwo = ingredientsinorder.find(eln => eln.ingredient === ingredientinorder);
            if (ingredientinorder && ingredientinordertwo){
              ingredientinordertwo.amount += 1;
              summa = summa + ingredientinorder.price;
            }else if (ingredientinorder)
              {let num:TOrderIngredient = {
              ingredient:ingredientinorder,
              amount:1};           
              ingredientsinorder.push(num);
              summa = summa + ingredientinorder.price;
            } 
        }
     )} 
     let order:TOrder ={
      _id: ordernew._id,
     createdAt: ordernew.createdAt,
     ingredients: ingredientsinorder,
     name: ordernew.name,
     number: ordernew.number,
     status: ordernew.status,
     summ: summa,
     updatedAt: ordernew.updatedAt,
     };

return order
}    
//****************************************************************** */
export const selectUserOrders = (state: RootState) => {
  const listOrder = state.orders.orders;
  const cardsnew = state.ingredients.ingredientList;
  const orders:TOrder[] =[];
  

 {listOrder.map((item) => 
    { 
     const ingradString = item.ingredients;
     let ingredientsinorder:TOrderIngredient[]=[];
     
     
     let summa = 0;
     {ingradString.map((element) => 
        {
         let ingredientinorder:TIngredient|undefined; 
         let ingredientinordertwo:TOrderIngredient|undefined; 

         ingredientinorder = cardsnew.find(el => el._id === element);
         ingredientinordertwo = ingredientsinorder.find(eln => eln.ingredient === ingredientinorder);
            if (ingredientinorder && ingredientinordertwo){
              ingredientinordertwo.amount += 1;
              summa = summa + ingredientinorder.price;
            }else if (ingredientinorder)
              {let num:TOrderIngredient = {
              ingredient:ingredientinorder,
              amount:1};           
              ingredientsinorder.push(num);
              summa = summa + ingredientinorder.price;
            } 
        }
     )} 
     
     let order:TOrder ={
      _id: item._id,
     createdAt: item.createdAt,
     ingredients: ingredientsinorder,
     name: item.name,
     number: item.number,
     status: item.status,
     summ: summa,
     updatedAt: item.updatedAt,
     };

     orders.push(order);
   }
 )}
 orders.reverse();
return orders
}

//****************************************************************** */

export const selectOrders = (state: RootState) => {
    const listOrder = state.orders.orders;
    const cardsnew = state.ingredients.ingredientList;
    const orders:TOrder[] =[];

   {listOrder.map((item) => 
      { 
       const ingradString = item.ingredients;
       let ingredientsinorder:TOrderIngredient[]=[];
       
       
       let summa = 0;
       {ingradString.map((element) => 
          {
           let ingredientinorder:TIngredient|undefined; 
           let ingredientinordertwo:TOrderIngredient|undefined; 

           ingredientinorder = cardsnew.find(el => el._id === element);
           ingredientinordertwo = ingredientsinorder.find(eln => eln.ingredient === ingredientinorder);
              if (ingredientinorder && ingredientinordertwo){
                ingredientinordertwo.amount += 1;
                summa = summa + ingredientinorder.price;
              }else if (ingredientinorder)
                {let num:TOrderIngredient = {
                ingredient:ingredientinorder,
                amount:1};           
                ingredientsinorder.push(num);
                summa = summa + ingredientinorder.price;
              } 
          }
       )} 
       
       let order:TOrder ={
        _id: item._id,
       createdAt: item.createdAt,
       ingredients: ingredientsinorder,
       name: item.name,
       number: item.number,
       status: item.status,
       summ: summa,
       updatedAt: item.updatedAt,
       };

       orders.push(order);
     }
   )}
  return orders
}

//****************************************************************** */
export const selectTotal = (state: RootState) => state.orders.total;

export const selectTotalToday = (state: RootState) => state.orders.totalToday;

//**************************************************************** */
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


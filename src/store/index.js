

import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import { orderSlice } from "./order-slice";
import ingredientReducer from "./ingredient-slice";
import ingredientsReducer from "./ingredients-slice";
import newburgerReducer from "./newburger-slice";
import orderReducer from "./order-slice";
import ingredientsReducernew from "./ingredients-slicenew";
import userReducer from "./user-slice";


export const initialState = {
    ingredientList: [],
    newBurger:{},
    ingredient: {},
    order: 0,
    ingredientListnew: [],
    user:{},

}


/*export const store = createStore(rootReducer,composeWithDevTools());*/
export const store = configureStore({
  reducer:{
    ingredient: ingredientReducer,
    ingredients: ingredientsReducer,
    ingredientsnew: ingredientsReducernew,
    newBurger: newburgerReducer,
    order: orderReducer,
    user: userReducer,

  },

})

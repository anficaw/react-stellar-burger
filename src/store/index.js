

import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import { orderSlice } from "./order-slice";
import ingradientReducer from "./ingradient-slice";
import ingradientsReducer from "./ingradients-slice";
import newburgerReducer from "./newburger-slice";
import orderReducer from "./order-slice";
import ingradientsReducernew from "./ingradients-slicenew";
import userReducer from "./user-slice";


export const initialState = {
    ingradientList: [],
    newBurger:{},
    ingradient: {},
    order: 0,
    ingradientListnew: [],
    user:{},

}


/*export const store = createStore(rootReducer,composeWithDevTools());*/
export const store = configureStore({
  reducer:{
    ingradient: ingradientReducer,
    ingradients: ingradientsReducer,
    ingradientsnew: ingradientsReducernew,
    newBurger: newburgerReducer,
    order: orderReducer,
    user: userReducer,

  },

})

import { configureStore,combineReducers } from "@reduxjs/toolkit";
import ingredientReducer from "./ingredient-slice";
import ingredientsReducer from "./ingredients-slice";
import newburgerReducer from "./newburger-slice";
import ordernewReducer from "./ordernew-slice";
import orderReducer from "./order-slice";
import userReducer from "./user-slice";
import { socketMiddleware } from "./socketMiddleware";
import {
  connect as OrdersWsConnect,
  disconnect as OrdersWsDisconnect,
  wsConnecting as OrdersWsConnecting,
  wsOpen as OrdersWsOpen,
  wsClose as OrdersWsClose,
  wsMessage as OrdersWsNessage,
  wsError as OrdersWsError,
} from "./actoins";
import { ordersReducer } from "./reducer";

//*************************** */
const wsActions = {
  wsConnect: OrdersWsConnect,
  wsDisconnect: OrdersWsDisconnect,
  wsConnecting: OrdersWsConnecting,
  onOpen: OrdersWsOpen,
  onClose: OrdersWsClose,
  onError: OrdersWsError,
  onMessage: OrdersWsNessage,
};
const ordersMiddleware = socketMiddleware(wsActions);

//********************************* */

export const initialState = {
    ingredientList: [],
    newBurger:{},
    ingredient: {},
    order: 0,
    ordernew:{},
    user:{},
    orders:{},
    
}
const rootReducer = combineReducers({
  ingredient: ingredientReducer,
  ingredients: ingredientsReducer,
  newBurger: newburgerReducer,
  order: orderReducer,
  ordernew: ordernewReducer,
  user: userReducer,
  orders: ordersReducer,
  
});


const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(ordersMiddleware);
  },
  },
);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispath = typeof store.dispatch;



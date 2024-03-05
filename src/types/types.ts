
import store from "../store/index";

export enum WebsocketStatus {
    CONNECTING = "CONNECTING...",
    ONLINE = "ONLINE",
    OFFLINE = "OFFLINE",
  }
  
  export interface TableRow {
    id: number;
    text: string;
  }


  //***************************************************** */


  export interface IIngredient {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number,
    _constId?: string,
  };
  
  export interface ILoginUser {
    email: string, 
    password: string,
  }
  
  export interface IUser {
    name: string,
    email: string, 
    password?: string,
  }
  
  export interface IOrder {
    name: string;
    ingredients: string[],
    _id: string,
    status: string,
    number: number,
    createdAt: string,
    updatedAt: string,
  }
  
  export type AppDispatch = typeof store.dispatch;
  
  export interface IOrders {
    success: boolean,
    orders: IOrder[],
    total: number,
    totalToday: number
  }
  
  //***************************************************** */
  
  export type Orders = Array<TableRow>;
  
  export enum OrdersActionType {
    DATA = "data",
    INSERT = "insert",
    DELETE = "delete",
    UPDATE = "update",
    MOVE = "move",
  }
  
  export type Data = {
    type: OrdersActionType.DATA;
    data: Orders;
  };
  
  export type Insert = {
    type: OrdersActionType.INSERT;
    data: {
      rows: Array<TableRow>;
      pos: number;
    };
  };
  
  export type Update = {
    type: OrdersActionType.UPDATE;
    data: Orders;
  };
  
  export type Delete = {
    type: OrdersActionType.DELETE;
    data: Array<number>;
  };
  
  export type Move = {
    type: OrdersActionType.MOVE;
    data: Array<{ from: number; to: number }>;
  };
  
  export type OrdersAction = Insert | Data | Delete | Update | Move;
  
  export type OrdersActions = Array<OrdersAction>;
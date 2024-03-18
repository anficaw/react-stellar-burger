import { WebsocketStatus } from "../types/types";
import { createReducer } from "@reduxjs/toolkit";
import { wsOpen, wsClose, wsMessage, wsError, wsConnecting } from "./actoins";
import { IOrder } from "../types/types";
import { RootState } from "./index";


export type OrdersStore = {
  status: WebsocketStatus;
  connectionError: string;
  orders: IOrder[];
  total: number;
  totalToday: number;
};

const initialState: OrdersStore = {
  status: WebsocketStatus.OFFLINE,
  connectionError: "",
  orders: [],
  total: 0,
  totalToday: 0,
};

export const ordersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsConnecting, (state) => {
      state.status = WebsocketStatus.CONNECTING;
    })
    .addCase(wsOpen, (state) => {
      state.status = WebsocketStatus.ONLINE;
      state.connectionError = "";
    })
    .addCase(wsClose, (state) => {
      state.status = WebsocketStatus.OFFLINE;
      state.orders = [];
      state.total = 0;
      state.totalToday = 0;
    })
    .addCase(wsError, (state, action) => {
      state.connectionError = action.payload;
    })
    .addCase(wsMessage, (state, action) => {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    });
});
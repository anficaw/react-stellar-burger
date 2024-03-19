import { getOrder } from "../utils/api";
import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {ТnewBurgerID} from '../types';


type OrderState = {
  order: string,
  orderisLoad: boolean,
  errorOrder: string,
}

export const initialState: OrderState = {
  order: '0',
  orderisLoad: false,
  errorOrder: "",
};

export const fetchOrder =  createAsyncThunk <string,ТnewBurgerID,{rejectValue:string}> (
  "order/get", async (newBurgerID) => {
  const res = await getOrder(newBurgerID);
  const data:string = res.order.number;
  console.log('6666666666666666666');
  console.log(res);
  return data;
});

export const orderSlice = createSlice ({
  name: 'order',
  initialState: initialState,
  reducers:{
    dellNumber: (state) => {           
      state.order = '0';
      state.orderisLoad = false;
      state.errorOrder = "";
    }
  },
  extraReducers: (builder) => {
    builder
       .addCase(fetchOrder.pending, (state) => {
        state.orderisLoad = false;
        state.errorOrder = "";
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        state.orderisLoad = true;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.orderisLoad = false;
        state.errorOrder = "error";
      });
  },
});


export default orderSlice.reducer;
export const {dellNumber} = orderSlice.actions;
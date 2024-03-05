import { getOrdernew } from "../utils/api";
import { createSlice, PayloadAction,createAsyncThunk} from "@reduxjs/toolkit";
import {TlineOrderst, OrderString } from '../types';


type OrdernewState = {
  order:TlineOrderst|null,
  orderisLoad: boolean,
  errorOrder: string,
}
 
const initialState: OrdernewState = {
  order:null,
  orderisLoad: false,
  errorOrder: "",
};

export const fetchOrdernew =  createAsyncThunk <TlineOrderst,OrderString,{rejectValue:string}>(
    "ordernew/get", async (orderNumber) => {
  const res = await getOrdernew(orderNumber.order);
  const data:TlineOrderst = res.orders[0];
  return data;
});

export const ordernewSlice = createSlice ({
  name: 'ordernew',
  initialState: initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
       .addCase(fetchOrdernew.pending, (state) => {
        state.orderisLoad = false;
        state.errorOrder = "";
      })
      .addCase(fetchOrdernew.fulfilled, (state, action) => {
        state.order = action.payload;
        state.orderisLoad = true;
      })
      .addCase(fetchOrdernew.rejected, (state, action) => {
        state.orderisLoad = false;
        state.errorOrder = "error";
      });
  },
});


export default ordernewSlice.reducer;

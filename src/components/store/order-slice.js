import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOrder } from "../../utils/api";

const initialState = {
  order: 0,
  orderisLoad: false,
  errorOrder: "",
};

export const fetchOrder = createAsyncThunk("order/get", async (newBurgerID) => {
  const res = await getOrder(newBurgerID);
  const data = res.order.number;
  return data;
});

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending.type, (state, action) => {
        state.orderisLoad = false;
        state.errorOrder = "";
      })
      .addCase(fetchOrder.fulfilled.type, (state, action) => {
        state.order = action.payload;
        state.isLoad = true;
      })
      .addCase(fetchOrder.rejected.type, (state, action) => {
        state.orderisLoad = false;
        state.errorOrder = action.error.massage;
      });
  },
});

export default orderSlice.reducer;

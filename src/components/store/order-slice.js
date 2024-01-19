import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOrder } from "../../utils/api";
 

const initialState = {
    order: 0,  
    orderisLoad: false,
    errorOrder:'',
}


export const fetchList = createAsyncThunk(
    'order/get',
    async () => {
      const res = await getOrder();
      const data = res.data;
      return data;
      
    }
  )

const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    extraReducers: builder =>
    { builder
         .addCase(fetchList.pending.type, (state, action) => {
            state.orderisLoad = false;
            state.errorOrder  = '';
           })
           .addCase (fetchList.fulfilled.type, (state, action) => {
            state.order = action.payload;
            state.isLoad = true;
            })
            .addCase (fetchList.rejected.type, (state, action) => {
            state.orderisLoad = false;
            state.errorOrder  = action.error.massage;
           })
    
    }

})

export default orderSlice.reducer;

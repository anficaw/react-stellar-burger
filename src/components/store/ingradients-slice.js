import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCard } from "../../utils/api";

const initialState = {
    ingradientList: [],
    isLoad: false,
    errorIngr:'',

}

export const fetchList = createAsyncThunk(
    'ingradients/get',
    async () => {
      const res = await getCard();
      const data = res.data;
      return data;
      
    }
  )

const ingradientsSlice = createSlice({
    name: 'ingradients',
    initialState: initialState,
   
    extraReducers: builder =>
    { builder
         .addCase(fetchList.pending.type, (state, action) => {
            state.isLoad = false;
            state.errorIngr  = '';
           })
           .addCase (fetchList.fulfilled.type, (state, action) => {
            state.ingradientList = action.payload;
            state.isLoad = true;
            })
            .addCase (fetchList.rejected.type, (state, action) => {
            state.isLoad = false;
            state.errorIngr  = action.error.massage;
           })
    
    }

})

export default ingradientsSlice.reducer;

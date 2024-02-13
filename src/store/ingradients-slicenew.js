import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getIngredients } from "../utils/api";

const initialState = {
    ingradientList: [],
    isLoad: false,
    errorIngr:'',

}

export const fetchListnew = createAsyncThunk(
    'ingradientsnew/get',
    async () => {
      const res = await getIngredients();
      const data = res.data;
      return data;
      
    }
  )

const ingradientsSlicenew = createSlice({
    name: 'ingradientsnew',
    initialState: initialState,
   
    extraReducers: builder =>
    { builder
         .addCase(fetchListnew.pending.type, (state, action) => {
            state.isLoad = false;
            state.errorIngr  = '';
           })
           .addCase (fetchListnew.fulfilled.type, (state, action) => {
            state.ingradientList = action.payload;
            state.isLoad = true;
            })
            .addCase (fetchListnew.rejected.type, (state, action) => {
            state.isLoad = false;
            state.errorIngr  = action.error.massage;
           })
    
    }

})

export default ingradientsSlicenew.reducer;

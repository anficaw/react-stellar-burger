import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getIngredients } from "../utils/api";

const initialState = {
    ingredientList: [],
    isLoad: false,
    errorIngr:'',

}

export const fetchListnew = createAsyncThunk(
    'ingredientsnew/get',
    async () => {
      const res = await getIngredients();
      const data = res.data;
      return data;
      
    }
  )

const ingredientsSlicenew = createSlice({
    name: 'ingredientsnew',
    initialState: initialState,
   
    extraReducers: builder =>
    { builder
         .addCase(fetchListnew.pending.type, (state, action) => {
            state.isLoad = false;
            state.errorIngr  = '';
           })
           .addCase (fetchListnew.fulfilled.type, (state, action) => {
            state.ingredientList = action.payload;
            state.isLoad = true;
            })
            .addCase (fetchListnew.rejected.type, (state, action) => {
            state.isLoad = false;
            state.errorIngr  = action.error.massage;
           })
    
    }

})

export default ingredientsSlicenew.reducer;

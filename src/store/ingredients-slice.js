import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getIngredients } from "../utils/api";

const initialState = {
    ingredientList: [],
    isLoad: false,
    errorIngr:'',

}

export const fetchList = createAsyncThunk(
    'ingredients/get',
    async () => {
      const res = await getIngredients();
      const data = res.data;
      return data;
      
    }
  )

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState: initialState,
   
    extraReducers: builder =>
    { builder
         .addCase(fetchList.pending.type, (state, action) => {
            state.isLoad = false;
            state.errorIngr  = '';
           })
           .addCase (fetchList.fulfilled.type, (state, action) => {
            state.ingredientList = action.payload;
            state.isLoad = true;
            })
            .addCase (fetchList.rejected.type, (state, action) => {
            state.isLoad = false;
            state.errorIngr  = action.error.massage;
           })
    
    }

})

export default ingredientsSlice.reducer;

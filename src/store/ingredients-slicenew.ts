import { createSlice, PayloadAction,createAsyncThunk} from "@reduxjs/toolkit";
import { getIngredients } from "../utils/api";
import { TIngredients, TIngredient } from '../types';

type IngredientState = {
    ingredientList:TIngredient[],
    isLoad: boolean,
    errorIngr:string,
  }
  

const initialState:IngredientState = {
    ingredientList: [],
    isLoad: false,
    errorIngr:'',

}

export const fetchListnew = createAsyncThunk <TIngredient[],undefined,{rejectValue:string}>(
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
    reducers:{},
   
    extraReducers: builder =>
    { builder
         .addCase(fetchListnew.pending, (state, ) => {
            state.isLoad = false;
            state.errorIngr  = '';
           })
           .addCase (fetchListnew.fulfilled, (state, action) => {
            state.ingredientList = action.payload;
            state.isLoad = true;
            })
            .addCase (fetchListnew.rejected, (state, action) => {
            state.isLoad = false;
            state.errorIngr  = 'error';
           })
    
    }

})

export default ingredientsSlicenew.reducer;

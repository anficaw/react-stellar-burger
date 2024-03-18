import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { getIngredients } from "../utils/api";
import { TIngredient } from '../types';

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

export const fetchList = createAsyncThunk <TIngredient[],undefined,{rejectValue:string}>(
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
    reducers:{},
   
    extraReducers: builder =>
    { builder
         .addCase(fetchList.pending, (state, ) => {
            state.isLoad = false;
            state.errorIngr  = '';
           })
           .addCase (fetchList.fulfilled, (state, action) => {
            console.log(action.payload);
            state.ingredientList = action.payload;
            state.isLoad = true;
            })
            .addCase (fetchList.rejected, (state) => {
            state.isLoad = false;
            state.errorIngr  = 'error';
           })
    
    }

})

export default ingredientsSlice.reducer;

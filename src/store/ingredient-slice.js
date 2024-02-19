import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   
    ingredient: {},
    
}

const ingredientSlice = createSlice({
    name: 'ingredient',
    initialState: initialState,
    reducers: {
        addIng: (state, action) => {
            state.ingredient = action.payload;
        }
    }

})

export default ingredientSlice.reducer;
export const {addIng} = ingredientSlice.actions;
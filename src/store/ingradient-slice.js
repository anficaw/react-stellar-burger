import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   
    ingradient: {},
    
}

const ingradientSlice = createSlice({
    name: 'ingradient',
    initialState: initialState,
    reducers: {
        addIng: (state, action) => {
            state.ingradient = action.payload;
        }
    }

})

export default ingradientSlice.reducer;
export const {addIng} = ingradientSlice.actions;
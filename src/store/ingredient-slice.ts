
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {  TIngredient } from '../types';

type IngredientState = {
    ingredient: TIngredient,
}

export const initialState: IngredientState = {
    ingredient:
        {_id: "643d69a5c3f7b9001cfa0941n",
        name: "Тут будет ваша котлета,соус и многое другое",
        type: "main",
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 0,
        image: "https://code.s3.yandex.net/react/code/meat-01.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
        __v: 0,  }
    
}

const ingredientSlice = createSlice({
    name: 'ingredient',
    initialState: initialState,
    reducers: {
        addIng: (state, action:PayloadAction<TIngredient>) => {
            state.ingredient = action.payload;
        }
    }

})

export default ingredientSlice.reducer;
export const {addIng} = ingredientSlice.actions;
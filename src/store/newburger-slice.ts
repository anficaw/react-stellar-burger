 // @ts-ignore: error message
import { v4 as uuid } from 'uuid';
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { TIngredients, TIngredient } from '../types';
import { BUN, INGREDIENT } from '../utils/data';

type NewBurger  = {
        bun:{
            number:number, 
            ingredientbun:TIngredient,
        },
        ingredients:TIngredients[]           
}


type NewBurgerState = {
    newBurger:NewBurger,
}

export const initialState:NewBurgerState = {
    newBurger:{ bun: BUN,
            ingredients: [
             INGREDIENT,
                           
            ],
            
          }
    };
    
const newBurgerSlice = createSlice({
    name: 'newBurger',
    initialState: initialState,
    reducers: {
        addBurger: (state, action:PayloadAction<NewBurger>) => {           
            state.newBurger = action.payload;},
        addIngredient: (state, action:PayloadAction<TIngredients>) => {     
          const ingred = action.payload;
          //ingred.id = uuid();
          state.newBurger.ingredients.push(ingred);
        },   
        addBun: (state, action:PayloadAction<TIngredient>) => {         
          state.newBurger.bun.ingredientbun = action.payload},   

        delIngredient: (state, action:PayloadAction<number>) => {     
          state.newBurger.ingredients.splice(action.payload,1)},  

        changeIngredient: (state, action:PayloadAction<{indexFrom:number, indexTo:number, ingredient:TIngredients}>) => {   
          const {indexFrom, indexTo, ingredient} = action.payload;       
          state.newBurger.ingredients.splice(indexFrom,1);
          state.newBurger.ingredients.splice(indexTo,0,ingredient);
        }               
               
    }
})

export default newBurgerSlice.reducer;
export const {addBurger, delIngredient, changeIngredient, addIngredient, addBun} = newBurgerSlice.actions;
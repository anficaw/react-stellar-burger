import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const initialState = {
    newBurger:{ bun: {
               number:0,
               ingredientbun: {
              _id: "643d69a5c3f7b9001cfa093cn",
              name: "тут будет  ваша   булка       ",
              type: "bun",
              proteins: 80,
              fat: 24,
              carbohydrates: 53,
              calories: 420,
              price: 0,
              image: "https://code.s3.yandex.net/react/code/bun-02.png",
              image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
              image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
              __v: 0,
            }},
            ingredients: [
              { 
                number: 0,
                id: uuid(),
                ingredient:
              {
                _id: "643d69a5c3f7b9001cfa0941n",
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
                __v: 0,
              }},
                           
            ],
          }
    };
    

const newBurgerSlice = createSlice({
    name: 'newBurger',
    initialState: initialState,
    reducers: {
        addBurger: (state, action) => {           
            state.newBurger = action.payload;},
        addIngredient: (state, action) => {     
          console.log(action.payload);  
          const ingred = action.payload;
          ingred.id = uuid();
          state.newBurger.ingredients.push(ingred);
        },   
        addBun: (state, action) => {         
          state.newBurger.bun.ingredientbun = action.payload},   
        delIngredient: (state, action) => {     
          console.log(action.payload); 
          state.newBurger.ingredients.splice(action.payload,1)},  
        changeIngredient: (state, action) => {   
          const {indexFrom, indexTo, ingredient} = action.payload;       
          state.newBurger.ingredients.splice(indexFrom,1);
          state.newBurger.ingredients.splice(indexTo,0,ingredient);
        }               
               
    }
})

export default newBurgerSlice.reducer;
export const {addBurger, delIngredient, changeIngredient, addIngredient, addBun} = newBurgerSlice.actions;
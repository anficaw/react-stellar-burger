import ingredientSlice from "./ingredient-slice";
import { addIng } from "./ingredient-slice";

const  initialState = {
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

const ingredient=
    {_id: "643d69a5c3f7b9001cfa0941",
      name: "Биокотлета из марсианской Магнолии",
      type: "main",
      proteins: 420,
      fat: 142,
      carbohydrates: 242,
      calories: 4242,
      price: 424,
      image: "https://code.s3.yandex.net/react/code/meat-01.png",
      image_mobile:
        "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
      __v: 0,
    };

describe("Тест ингредиента", ()=>{
     it ('Добавление ингредиента', () =>{
        expect (ingredientSlice (initialState,addIng(ingredient))).toEqual({
            ingredient:
            {_id: "643d69a5c3f7b9001cfa0941",
            name: "Биокотлета из марсианской Магнолии",
            type: "main",
            proteins: 420,
            fat: 142,
            carbohydrates: 242,
            calories: 4242,
            price: 424,
            image: "https://code.s3.yandex.net/react/code/meat-01.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
            __v: 0,
          }

        });

        expect (ingredientSlice (undefined,addIng(ingredient))).toEqual({
          ingredient:
          {_id: "643d69a5c3f7b9001cfa0941",
          name: "Биокотлета из марсианской Магнолии",
          type: "main",
          proteins: 420,
          fat: 142,
          carbohydrates: 242,
          calories: 4242,
          price: 424,
          image: "https://code.s3.yandex.net/react/code/meat-01.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
          __v: 0,
        }

      });
        
     })
     
})
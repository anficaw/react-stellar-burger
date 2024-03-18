import ingredientsSlice from "./ingredients-slice";

const initialState = {
    ingredientList: [],
    isLoad: false,
    errorIngr:'',

}

const list = [
    {
        _id: "643d69a5c3f7b9001cfa093f",
        name: "Мясо бессмертных моллюсков Protostomia",
        type: "main",
        proteins: 433,
        fat: 244,
        carbohydrates: 33,
        calories: 420,
        price: 1337,
        image: "https://code.s3.yandex.net/react/code/meat-02.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
        __v: 0,
        
      },
      {
        _id: "643d69a5c3f7b9001cfa0940",
        name: "Говяжий метеорит (отбивная)",
        type: "main",
        proteins: 800,
        fat: 800,
        carbohydrates: 300,
        calories: 2674,
        price: 3000,
        image: "https://code.s3.yandex.net/react/code/meat-04.png",
        image_mobile:
          "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
        __v: 0,
      
      },
]

describe('Test ingredientsSlice', () =>{
    it('panding test', () =>{
        expect (ingredientsSlice( initialState, {
            type: "ingredients/get/pending",

        })).toEqual({
            ingredientList: [],
            isLoad: false,
            errorIngr:'',
        })
        expect (ingredientsSlice( undefined, {
            type: "ingredients/get/pending",

        })).toEqual({
            ingredientList: [],
            isLoad: false,
            errorIngr:'',
        })
        
    })
    it('fulfilled test', () =>{
        expect (ingredientsSlice( initialState, {
            type: "ingredients/get/fulfilled",
            payload: list,

        })).toEqual({
            ingredientList: list,
            isLoad: true,
            errorIngr:'',
        })
        expect (ingredientsSlice( undefined, {
            type: "ingredients/get/fulfilled",
            payload: list,

        })).toEqual({
            ingredientList: list,
            isLoad: true,
            errorIngr:'',
        })
        
        
    })
    it('rejected test', () =>{
        expect (ingredientsSlice( initialState, {
            type: "ingredients/get/rejected",
            

        })).toEqual({
            ingredientList: [],
            isLoad: false,
            errorIngr:'error',
        })
        expect (ingredientsSlice( undefined, {
            type: "ingredients/get/rejected",
            payload: list,

        })).toEqual({
            ingredientList: [],
            isLoad: false,
            errorIngr:'error',
        })
        
        
    })


} )
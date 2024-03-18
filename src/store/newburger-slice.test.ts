import newBurgerSlice from "./newburger-slice";
import { newBurgerone } from "../utils/data";
import {
  addBurger,
  delIngredient,
  changeIngredient,
  addIngredient,
  addBun,
} from "./newburger-slice";


const initialState = {
  newBurger: {
    bun: {
      number: 0,
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
      },
    },
    ingredients: [
      {
        number: 0,
        id: "548",
        ingredient: {
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
          image_large:
            "https://code.s3.yandex.net/react/code/meat-01-large.png",
          __v: 0,
        },
      },
    ],
  },
};

const initialStatebun = {
    newBurger: {
      bun: {
        number: 0,
        ingredientbun: {
            _id: "643d69a5c3f7b9001cfa093d",
            name: "Флюоресцентная булка R2-D3",
            type: "bun",
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: "https://code.s3.yandex.net/react/code/bun-01.png",
            image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
            __v: 0,
        },
      },
      ingredients: [
        {
          number: 0,
          id: "548",
          ingredient: {
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
            image_large:
              "https://code.s3.yandex.net/react/code/meat-01-large.png",
            __v: 0,
          },
        },
      ],
    },
  };

const initialStateadd = {
    newBurger: {
      bun: {
        number: 0,
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
        },
      },
      ingredients: [
        {
          number: 0,
          id: "548",
          ingredient: {
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
            image_large:
              "https://code.s3.yandex.net/react/code/meat-01-large.png",
            __v: 0,
          },
        },
        {
            number: 0,
            id: "550",
            ingredient: {
                _id: "643d69a5c3f7b9001cfa0944",
                name: "Соус традиционный галактический",
                type: "sauce",
                proteins: 42,
                fat: 24,
                carbohydrates: 42,
                calories: 99,
                price: 15,
                image: "https://code.s3.yandex.net/react/code/sauce-03.png",
                image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
                __v: 0,
            },
          }
      ],
    },
  };

const burger = {
  newBurger: {
    bun: {
      number: 0,
      ingredientbun: {
        _id: "643d69a5c3f7b9001cfa093d",
    name: "Флюоресцентная булка R2-D3",
    type: "bun",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
    __v: 0,
      },
    },
    ingredients: [
      {
        number: 0,
        id: "548",
        ingredient: {
          _id: "643d69a5c3f7b9001cfa0941",
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
          image_large:
            "https://code.s3.yandex.net/react/code/meat-01-large.png",
          __v: 0,
        },
      },
      {
        number: 0,
        id: "549",
        ingredient: {
            _id: "643d69a5c3f7b9001cfa0944",
            name: "Соус традиционный галактический",
            type: "sauce",
            proteins: 42,
            fat: 24,
            carbohydrates: 42,
            calories: 99,
            price: 15,
            image: "https://code.s3.yandex.net/react/code/sauce-03.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
            __v: 0,
        },
      },
    ],
  },
};

const burgercng = {
    newBurger: {
      bun: {
        number: 0,
        ingredientbun: {
          _id: "643d69a5c3f7b9001cfa093d",
      name: "Флюоресцентная булка R2-D3",
      type: "bun",
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: "https://code.s3.yandex.net/react/code/bun-01.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
      __v: 0,
        },
      },
      ingredients: [
        
        {
          number: 0,
          id: "549",
          ingredient: {
              _id: "643d69a5c3f7b9001cfa0944",
              name: "Соус традиционный галактический",
              type: "sauce",
              proteins: 42,
              fat: 24,
              carbohydrates: 42,
              calories: 99,
              price: 15,
              image: "https://code.s3.yandex.net/react/code/sauce-03.png",
              image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
              image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
              __v: 0,
          },
        },
        {
            number: 0,
            id: "548",
            ingredient: {
              _id: "643d69a5c3f7b9001cfa0941",
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
              image_large:
                "https://code.s3.yandex.net/react/code/meat-01-large.png",
              __v: 0,
            },
          },
      ],
    },
  };

const ingredientcng = {
     
    number: 0,
    id: "548",
    ingredient: {
      _id: "643d69a5c3f7b9001cfa0941",
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
      image_large:
        "https://code.s3.yandex.net/react/code/meat-01-large.png",
      __v: 0,
    },
  };

const burgerDel = {
    newBurger: {
      bun: {
        number: 0,
        ingredientbun: {
          _id: "643d69a5c3f7b9001cfa093d",
      name: "Флюоресцентная булка R2-D3",
      type: "bun",
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: "https://code.s3.yandex.net/react/code/bun-01.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
      __v: 0,
        },
      },
      ingredients: [
        {
          number: 0,
          id: "548",
          ingredient: {
            _id: "643d69a5c3f7b9001cfa0941",
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
            image_large:
              "https://code.s3.yandex.net/react/code/meat-01-large.png",
            __v: 0,
          },
        },
        
      ],
    },
  };

const burgeradd = {
    newBurger: {
      bun: {
        number: 0,
        ingredientbun: {
          _id: "643d69a5c3f7b9001cfa093d",
      name: "Флюоресцентная булка R2-D3",
      type: "bun",
      proteins: 44,
      fat: 26,
      carbohydrates: 85,
      calories: 643,
      price: 988,
      image: "https://code.s3.yandex.net/react/code/bun-01.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
      __v: 0,
        },
      },
      ingredients: [
        {
          number: 0,
          id: "548",
          ingredient: {
            _id: "643d69a5c3f7b9001cfa0941",
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
            image_large:
              "https://code.s3.yandex.net/react/code/meat-01-large.png",
            __v: 0,
          },
        },
        
        {
          number: 0,
          id: "549",
          ingredient: {
              _id: "643d69a5c3f7b9001cfa0944",
              name: "Соус традиционный галактический",
              type: "sauce",
              proteins: 42,
              fat: 24,
              carbohydrates: 42,
              calories: 99,
              price: 15,
              image: "https://code.s3.yandex.net/react/code/sauce-03.png",
              image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
              image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
              __v: 0,
          },
        },
        {
            number: 0,
            id: "550",
            ingredient: {
                _id: "643d69a5c3f7b9001cfa0944",
                name: "Соус традиционный галактический",
                type: "sauce",
                proteins: 42,
                fat: 24,
                carbohydrates: 42,
                calories: 99,
                price: 15,
                image: "https://code.s3.yandex.net/react/code/sauce-03.png",
                image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
                image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
                __v: 0,
            },
          },
      ],
    },
  };
const ingredient = {
    number: 0,
    id: "550",
    ingredient: {
        _id: "643d69a5c3f7b9001cfa0944",
        name: "Соус традиционный галактический",
        type: "sauce",
        proteins: 42,
        fat: 24,
        carbohydrates: 42,
        calories: 99,
        price: 15,
        image: "https://code.s3.yandex.net/react/code/sauce-03.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
        __v: 0,
    },
  };

const ingredientbun = {   
    _id: "643d69a5c3f7b9001cfa093d",
    name: "Флюоресцентная булка R2-D3",
    type: "bun",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
    __v: 0,
  };

describe("Test newBurgerSlice", () => {
  it("Test addBurger", () => {
    expect(newBurgerSlice(initialState, addBurger(newBurgerone))).toEqual({
        newBurger:newBurgerone      
    });
    expect(newBurgerSlice(undefined, addBurger(newBurgerone))).toEqual({
        newBurger:newBurgerone      
    })
  });
  it("Test delIngredient", () => {
    expect(newBurgerSlice(burger, delIngredient(1))).toEqual(
        burgerDel      
    );
    
  });
  
  it("Test changeIngredient", () => {
    expect(newBurgerSlice(burger, changeIngredient({indexFrom:0,indexTo:1,ingredient:ingredientcng}))).toEqual(
        burgercng      
    );
    
  });

  it("Test addIngredient", () => {
    expect(newBurgerSlice(burger, addIngredient(ingredient))).toEqual(
        burgeradd      
    );
    expect(newBurgerSlice(undefined, addIngredient(ingredient))).toEqual(
        initialStateadd      
    );
    
  });
  it("Test addBun", () => {
    expect(newBurgerSlice(burger, addBun(ingredientbun))).toEqual(
        burger  
    );
    expect(newBurgerSlice(undefined, addBun(ingredientbun))).toEqual(
        initialStatebun      
    );
  });


});

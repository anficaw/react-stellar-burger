// @ts-ignore: error message
import { v4 as uuid } from 'uuid';
import {  TlineOrderunic,TIngredient, TlineOrderall, TlineOrder} from '../types';
export const ordersServerUrl ='wss://norma.nomoreparties.space/orders/all';
export const userordersServerUrl ='wss://norma.nomoreparties.space/orders';
 
const BASE_URL ="https://norma.nomoreparties.space/api/"
export const sait= BASE_URL+ "ingredients";
export const saitOrder= BASE_URL + "orders";
export const saitfogot= BASE_URL + "password-reset";
export const saitreset= BASE_URL + "password-reset/reset";
export const saitregister= BASE_URL + "auth/register";
export const saitlogin= BASE_URL + "auth/login";
export const saitlogout= BASE_URL + "auth/logout";
export const saittoken= BASE_URL + "auth/token";
export const saituser= BASE_URL + "auth/user";

/*export const saitOrder= "https://norma.nomoreparties.space/api/orders";
export const saitfogot= "https://norma.nomoreparties.space/api/password-reset";
export const saitreset= "https://norma.nomoreparties.space/api/password-reset/reset";
export const saitregister= "https://norma.nomoreparties.space/api/auth/register";
export const saitlogin= "https://norma.nomoreparties.space/api/auth/login";
export const saitlogout= "https://norma.nomoreparties.space/api/auth/logout";
export const saittoken= "https://norma.nomoreparties.space/api/auth/token";
export const saituser= "https://norma.nomoreparties.space/api/auth/user";*/

export const Ingra:TIngredient[] =[ 
  {
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
    image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
    __v: 0,
  },
  {
    _id: "643d69a5c3f7b9001cfa093e",
    name: "Филе Люминесцентного тетраодонтимформа",
    type: "main",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/meat-03.png",
    image_mobile:
      "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
    __v: 0,
  },
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
  {
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
  {
    _id: "643d69a5c3f7b9001cfa0944",
    name: "Соус традиционный галактический",
    type: "sauce",
    proteins: 42,
    fat: 24,
    carbohydrates: 42,
    calories: 99,
    price: 15,
    image: "https://code.s3.yandex.net/react/code/sauce-03.png",
    image_mobile:
      "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
    __v: 0,
  },
 
  {
    _id: "643d69a5c3f7b9001cfa0946",
    name: "Хрустящие минеральные кольца",
    type: "main",
    proteins: 808,
    fat: 689,
    carbohydrates: 609,
    calories: 986,
    price: 300,
    image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
    image_mobile:
      "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
    image_large:
      "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
    __v: 0,
  },
  {
    _id: "643d69a5c3f7b9001cfa0947",
    name: "Плоды Фалленианского дерева",
    type: "main",
    proteins: 20,
    fat: 5,
    carbohydrates: 55,
    calories: 77,
    price: 874,
    image: "https://code.s3.yandex.net/react/code/sp_1.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
    __v: 0,
  },
  {
    _id: "643d69a5c3f7b9001cfa0948",
    name: "Кристаллы марсианских альфа-сахаридов",
    type: "main",
    proteins: 234,
    fat: 432,
    carbohydrates: 111,
    calories: 189,
    price: 762,
    image: "https://code.s3.yandex.net/react/code/core.png",
    image_mobile: "https://code.s3.yandex.net/react/code/core-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/core-large.png",
    __v: 0,
  },
  {
    _id: "643d69a5c3f7b9001cfa0949",
    name: "Мини-салат Экзо-Плантаго",
    type: "main",
    proteins: 1,
    fat: 2,
    carbohydrates: 3,
    calories: 6,
    price: 4400,
    image: "https://code.s3.yandex.net/react/code/salad.png",
    image_mobile: "https://code.s3.yandex.net/react/code/salad-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/salad-large.png",
    __v: 0,
  }, 
]

export const data = [
  {
     "_id":"60666c42cc7b410027a1a9b1",
     "name":"Краторная булка N-200i",
     "type":"bun",
     "proteins":80,
     "fat":24,
     "carbohydrates":53,
     "calories":420,
     "price":1255,
     "image":"https://code.s3.yandex.net/react/code/bun-02.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
     "__v":0
  },
  {
     "_id":"60666c42cc7b410027a1a9b5",
     "name":"Говяжий метеорит (отбивная)",
     "type":"main",
     "proteins":800,
     "fat":800,
     "carbohydrates":300,
     "calories":2674,
     "price":3000,
     "image":"https://code.s3.yandex.net/react/code/meat-04.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
     "__v":0
  },
  
  {
     "_id":"60666c42cc7b410027a1a9b7",
     "name":"Соус Spicy-X",
     "type":"sauce",
     "proteins":30,
     "fat":20,
     "carbohydrates":40,
     "calories":30,
     "price":90,
     "image":"https://code.s3.yandex.net/react/code/sauce-02.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/sauce-02-large.png",
     "__v":0
  },
  {
     "_id":"60666c42cc7b410027a1a9b4",
     "name":"Мясо бессмертных моллюсков Protostomia",
     "type":"main",
     "proteins":433,
     "fat":244,
     "carbohydrates":33,
     "calories":420,
     "price":1337,
     "image":"https://code.s3.yandex.net/react/code/meat-02.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/meat-02-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/meat-02-large.png",
     "__v":0
  },
  
  {
     "_id":"60666c42cc7b410027a1a9b8",
     "name":"Соус фирменный Space Sauce",
     "type":"sauce",
     "proteins":50,
     "fat":22,
     "carbohydrates":11,
     "calories":14,
     "price":80,
     "image":"https://code.s3.yandex.net/react/code/sauce-04.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/sauce-04-large.png",
     "__v":0
  },
  {
     "_id":"60666c42cc7b410027a1a9bc",
     "name":"Плоды Фалленианского дерева",
     "type":"main",
     "proteins":20,
     "fat":5,
     "carbohydrates":55,
     "calories":77,
     "price":874,
     "image":"https://code.s3.yandex.net/react/code/sp_1.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/sp_1-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/sp_1-large.png",
     "__v":0
  },
  {
     "_id":"60666c42cc7b410027a1a9bb",
     "name":"Хрустящие минеральные кольца",
     "type":"main",
     "proteins":808,
     "fat":689,
     "carbohydrates":609,
     "calories":986,
     "price":300,
     "image":"https://code.s3.yandex.net/react/code/mineral_rings.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/mineral_rings-large.png",
     "__v":0
  },
  {
     "_id":"60666c42cc7b410027a1a9ba",
     "name":"Соус с шипами Антарианского плоскоходца",
     "type":"sauce",
     "proteins":101,
     "fat":99,
     "carbohydrates":100,
     "calories":100,
     "price":88,
     "image":"https://code.s3.yandex.net/react/code/sauce-01.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/sauce-01-large.png",
     "__v":0
  },
  {
     "_id":"60666c42cc7b410027a1a9bd",
     "name":"Кристаллы марсианских альфа-сахаридов",
     "type":"main",
     "proteins":234,
     "fat":432,
     "carbohydrates":111,
     "calories":189,
     "price":762,
     "image":"https://code.s3.yandex.net/react/code/core.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/core-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/core-large.png",
     "__v":0
  },
  {
     "_id":"60666c42cc7b410027a1a9be",
     "name":"Мини-салат Экзо-Плантаго",
     "type":"main",
     "proteins":1,
     "fat":2,
     "carbohydrates":3,
     "calories":6,
     "price":4400,
     "image":"https://code.s3.yandex.net/react/code/salad.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/salad-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/salad-large.png",
     "__v":0
  },
  {
     "_id":"60666c42cc7b410027a1a9b3",
     "name":"Филе Люминесцентного тетраодонтимформа",
     "type":"main",
     "proteins":44,
     "fat":26,
     "carbohydrates":85,
     "calories":643,
     "price":988,
     "image":"https://code.s3.yandex.net/react/code/meat-03.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/meat-03-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/meat-03-large.png",
     "__v":0
  },
  {
     "_id":"60666c42cc7b410027a1a9bf",
     "name":"Сыр с астероидной плесенью",
     "type":"main",
     "proteins":84,
     "fat":48,
     "carbohydrates":420,
     "calories":3377,
     "price":4142,
     "image":"https://code.s3.yandex.net/react/code/cheese.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/cheese-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/cheese-large.png",
     "__v":0
  },
  {
     "_id":"60666c42cc7b410027a1a9b2",
     "name":"Флюоресцентная булка R2-D3",
     "type":"bun",
     "proteins":44,
     "fat":26,
     "carbohydrates":85,
     "calories":643,
     "price":988,
     "image":"https://code.s3.yandex.net/react/code/bun-01.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/bun-01-large.png",
     "__v":0
  }
]

export const newBurgerone = {
  bun: {
  number:0,
  ingredientbun:{  
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


export const NewBurgerone = {
   bun: {
     _id: "643d69a5c3f7b9001cfa093c",
     name: "Краторная булка N-200i",
     type: "bun",
     proteins: 80,
     fat: 24,
     carbohydrates: 53,
     calories: 420,
     price: 1255,
     image: "https://code.s3.yandex.net/react/code/bun-02.png",
     image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
     image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
     __v: 0,
   },
   ingredients: [
     {
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
       image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
       __v: 0,
     },
     {
       _id: "643d69a5c3f7b9001cfa093e",
       name: "Филе Люминесцентного тетраодонтимформа",
       type: "main",
       proteins: 44,
       fat: 26,
       carbohydrates: 85,
       calories: 643,
       price: 988,
       image: "https://code.s3.yandex.net/react/code/meat-03.png",
       image_mobile:
         "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
       image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
       __v: 0,
     },
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
     {
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
     {
       _id: "643d69a5c3f7b9001cfa0944",
       name: "Соус традиционный галактический",
       type: "sauce",
       proteins: 42,
       fat: 24,
       carbohydrates: 42,
       calories: 99,
       price: 15,
       image: "https://code.s3.yandex.net/react/code/sauce-03.png",
       image_mobile:
         "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
       image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
       __v: 0,
     },
    
     {
       _id: "643d69a5c3f7b9001cfa0946",
       name: "Хрустящие минеральные кольца",
       type: "main",
       proteins: 808,
       fat: 689,
       carbohydrates: 609,
       calories: 986,
       price: 300,
       image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
       image_mobile:
         "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
       image_large:
         "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
       __v: 0,
     },
     {
       _id: "643d69a5c3f7b9001cfa0947",
       name: "Плоды Фалленианского дерева",
       type: "main",
       proteins: 20,
       fat: 5,
       carbohydrates: 55,
       calories: 77,
       price: 874,
       image: "https://code.s3.yandex.net/react/code/sp_1.png",
       image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
       image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
       __v: 0,
     },
     {
       _id: "643d69a5c3f7b9001cfa0948",
       name: "Кристаллы марсианских альфа-сахаридов",
       type: "main",
       proteins: 234,
       fat: 432,
       carbohydrates: 111,
       calories: 189,
       price: 762,
       image: "https://code.s3.yandex.net/react/code/core.png",
       image_mobile: "https://code.s3.yandex.net/react/code/core-mobile.png",
       image_large: "https://code.s3.yandex.net/react/code/core-large.png",
       __v: 0,
     },
     {
       _id: "643d69a5c3f7b9001cfa0949",
       name: "Мини-салат Экзо-Плантаго",
       type: "main",
       proteins: 1,
       fat: 2,
       carbohydrates: 3,
       calories: 6,
       price: 4400,
       image: "https://code.s3.yandex.net/react/code/salad.png",
       image_mobile: "https://code.s3.yandex.net/react/code/salad-mobile.png",
       image_large: "https://code.s3.yandex.net/react/code/salad-large.png",
       __v: 0,
     },
   ],
 };

export const report: TlineOrderunic ={
  success: true,
  orders: [
    {
      ingredients: [
        "60d3463f7034a000269f45e7",
        "60d3463f7034a000269f45e9",
        "60d3463f7034a000269f45e8",
        "60d3463f7034a000269f45ea"
      ],
      _id: "",
      status: "done",
      number: 0,
      name:"ctjkdgfkj",
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    }
  ],
  total: 1,
  totalToday: 1
} 

export const reporttwo: TlineOrderall ={
  success: true,
  orders:[
    {
      ingredients: Ingra,
      _id: "1111",
      status: "done",
      number: 1564664,
      name:"Что то странное по вашему выбору",
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    
    },
    {
      ingredients: Ingra,
      _id: "2222",
      status: "done",
      number: 1564664,
      name:"Что то странное по вашему выбору",
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    
    },
    {
      ingredients: Ingra,
      _id: "3333",
      status: "done",
      number: 1564664,
      name:"Что то странное по вашему выбору",
      createdAt: "2021-06-23T14:43:22.587Z",
      updatedAt: "2021-06-23T14:43:22.603Z"
    
    }
  ],

  total: 1,
  totalToday: 1
} 

export const order:TlineOrder={
    ingredients: Ingra,
    _id: "reterrggf",
    status: "done",
    number: 1564664,
    name:"Что то странное по вашему выбору",
    createdAt: "2021-06-23T14:43:22.587Z",
    updatedAt: "2021-06-23T14:43:22.603Z"
  
}

export const orderStr = {
  ingredients: [
    "60d3463f7034a000269f45e7",
    "60d3463f7034a000269f45e9",
    "60d3463f7034a000269f45e8",
    "60d3463f7034a000269f45ea"
  ],
  _id: "",
  status: "done",
  number: 0,
  name:"Что то странное по вашему выбору",
  createdAt: "2021-06-23T14:43:22.587Z",
  updatedAt: "2021-06-23T14:43:22.603Z"
}

export const listorderStr = [{
  ingredients: [
    "643d69a5c3f7b9001cfa0942",
    "643d69a5c3f7b9001cfa093c",
    "643d69a5c3f7b9001cfa0941",
    "643d69a5c3f7b9001cfa093f"
  ],
  _id: "1111",
  status: "done",
  number: 56566656,
  name:"Что то странное по вашему выбору",
  createdAt: "2021-06-23T14:43:22.587Z",
  updatedAt: "2021-06-23T14:43:22.603Z"
},
{
  ingredients: [
    "643d69a5c3f7b9001cfa0942",
    "643d69a5c3f7b9001cfa093c",
    "643d69a5c3f7b9001cfa0941",
    "643d69a5c3f7b9001cfa093f"
  ],
  _id: "2222",
  status: "done",
  number: 4554321,
  name:"Что то странное по вашему выбору",
  createdAt: "2021-06-23T14:43:22.587Z",
  updatedAt: "2021-06-23T14:43:22.603Z"
},
{
  ingredients: [
    "643d69a5c3f7b9001cfa0942",
    "643d69a5c3f7b9001cfa093c",
    "643d69a5c3f7b9001cfa0941",
    "643d69a5c3f7b9001cfa093f"
  ],
  _id: "3333",
  status: "done",
  number: 2154512,
  name:"Что то странное по вашему выбору",
  createdAt: "2021-06-23T14:43:22.587Z",
  updatedAt: "2021-06-23T14:43:22.603Z"
}]




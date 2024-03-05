export type TIngredient = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
  };

  export type TIngredients = {
    number: number,
    id: string,
    ingredient:TIngredient
  };

  export type TNewBurger = {
    bun: {
      number:number,
      ingredientbun:TIngredient
    }
    ingredients: TIngredients[]
  };

  export type TNewBurgerConstructor = {
    newBurger: TNewBurger,
    newBurgerCost: number,
    newBurgerID: string[] }


export type TUserone = {
      name:string,
      email:string
    }
    
export type TUser = {
      user: TUserone|null,
      isAuthChecked: boolean,
      isSentMessage: boolean }
       
export type TUserT = {
          name:string,
          email:string
         }
export type ТnewBurgerID = {
    ingredients:string[],};

export type TlineOrder = {
 ingredients: TIngredient [],
 _id:string,
 name:string
 status:string,
 number: number,
 createdAt:string,
 updatedAt:string
}   

export type TOrder = {
  ingredients: TOrderIngredient [],
  _id:string,
  name:string
  status:string,
  number: number,
  createdAt:string,
  updatedAt:string,
  summ:number,
 }  
 export type TOrderIngredient = {
  ingredient: TIngredient,
  amount:number,
   
 }   

 export type OrderString = {
  order:string
}
 

export type TlineOrderst = {
  ingredients: string[],
  _id:string,
  name:string
  status:string,
  number: number,
  createdAt:string,
  updatedAt:string
 }   

export type TlineOrderall = {
  success: boolean,
  orders: TlineOrder[],
  total: number,
  totalToday: number
 
 }   

 export type TlineOrderunic = {
  success: boolean,
  orders:[
      {
        ingredients:string [],
        _id: string,
        status: string,
        number: number,
        name:string,
        createdAt:string,
        updatedAt: string
      }
    ],
    total: number,
    totalToday: number
  }
  

                      
          

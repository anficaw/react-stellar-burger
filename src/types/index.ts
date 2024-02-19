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

    
    export type TUser = {
      user: {
        name:string,
        password:string,
        email:string

      },
      isAuthChecked: boolean,
      isSentMessage: boolean }
       
      export type TUserT = {
          name:string,
          email:string
         }      
          
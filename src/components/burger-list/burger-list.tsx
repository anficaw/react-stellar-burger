import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
 
import { useDrag, useDrop } from "react-dnd";
import styles from "./burger-list.module.css";

import { useAppDispatch,useAppSelector } from "../../types/hook";
import { getNewBurgerSelector } from "../../store/action-selector";
import { changeIngredient, delIngredient} from "../../store/newburger-slice";
import { TIngredients,TNewBurgerConstructor } from "../../types";


type ТBurgerIngredientprops = {
  card:TIngredients,
}

type ТDragprops = {
  ingredient:TIngredients,
}


type ТCollectedprops = {
  isDragStart:boolean;
}

type ТBurgerListprops = {
  card:TIngredients,
  index:number
}

const BurgerList = (props:ТBurgerListprops) => {
  
  const dispatch = useAppDispatch();

  const [{ isDragStart }, dragRef] = useDrag<ТDragprops,unknown,ТCollectedprops>({
    type: "sort",
    item: { ingredient: props.card },
  });
  
  const newBurgerOrder:TNewBurgerConstructor = useAppSelector(getNewBurgerSelector);

  const findIndex = (item:TIngredients) => {
     return newBurgerOrder.newBurger.ingredients.indexOf(item);
  };

  const [, dropRef] = useDrop<ТDragprops,unknown,unknown >({
    accept: "sort",
    hover({ ingredient }) {
  
      if (props.card.id === ingredient.id) return;
       
      dispatch(changeIngredient({
          indexFrom: findIndex(ingredient),
          indexTo: props.index,
          ingredient: ingredient,
        }),
      );

    },
  });
   
  const onDel = () => {
      dispatch( delIngredient(props.index));     
  }; 

 if (!props.card.ingredient ) {
  return null
 }

  return (
    <div
      className={`mr-2 ${styles.ingredientslist}`}
      key={props.card.id}
      ref={(node) => dropRef(dragRef(node))}
    >
      <DragIcon type="primary"/>
      <ConstructorElement
        text={props.card.ingredient.name}
        price={props.card.ingredient.price}
        thumbnail={props.card.ingredient.image_mobile}
        handleClose={onDel}
      />
    </div>
  );
};

export default BurgerList;

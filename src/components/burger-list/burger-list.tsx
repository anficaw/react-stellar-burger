import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
 
import { useDrag, useDrop } from "react-dnd";
import styles from "./burger-list.module.css";
import { useDispatch, useSelector } from "react-redux";
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

const BurgerList = (card: TIngredients, index:number, key:string) => {
  
  const dispatch = useDispatch();

  const [{ isDragStart }, dragRef] = useDrag<ТDragprops,unknown,ТCollectedprops>({
    type: "sort",
    item: { ingredient: card },
  });
  
  const newBurgerOrder = useSelector(getNewBurgerSelector);

  const findIndex = (item:TIngredients) => {
     return newBurgerOrder.newBurger.ingredients.indexOf(item);
  };

  const [, dropRef] = useDrop<ТDragprops,unknown,unknown >({
    accept: "sort",
    hover({ ingredient }) {
  
      if (card.id === ingredient.id) return;
       
      dispatch(changeIngredient({
          indexFrom: findIndex(ingredient),
          indexTo: index,
          ingredient: ingredient,
        }),
      );

    },
  });
   
  const onDel = () => {
      dispatch( delIngredient(index));     
  }; 

 if (!card.ingredient ) {
  return null
 }

  return (
    <div
      className={`mr-2 ${styles.ingredientslist}`}
      key={card.id}
      ref={(node) => dropRef(dragRef(node))}
    >
      <DragIcon type="primary"/>
      <ConstructorElement
        text={card.ingredient.name}
        price={card.ingredient.price}
        thumbnail={card.ingredient.image_mobile}
        handleClose={onDel}
      />
    </div>
  );
};

export default BurgerList;

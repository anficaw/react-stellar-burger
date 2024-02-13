import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
 
import { useDrag, useDrop } from "react-dnd";
import styles from "./burger-list.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getNewBurgerSelector } from "../../store/action-selector";
import { changeIngredient, delIngredient} from "../../store/newburger-slice";

const BurgerList = ({ card, index }) => {
  
  const dispatch = useDispatch();

  const [{ isDragStart }, dragRef] = useDrag({
    type: "sort",
    item: { ingredient: card },
  });
  
  const newBurgerOrder = useSelector(getNewBurgerSelector);
    const findIndex = (item) => {
     return newBurgerOrder.newBurger.ingradients.indexOf(item);
  };

  const [, dropRef] = useDrop({
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
    console.log("jhsjklfhlkjgslkgj")
    
    dispatch( delIngredient(index));     
  }; 

  return (
    <div
      className={`mr-2 ${styles.ingradientslist}`}
      key={card.id}
      ref={(node) => dropRef(dragRef(node))}
    >
      <DragIcon className="mr-2" />
      <ConstructorElement
        text={card.ingradient.name}
        price={card.ingradient.price}
        thumbnail={card.ingradient.image_mobile}
         
        handleClose={onDel}
      />
    </div>
  );
};

export default BurgerList;

import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import styles from "./single-ingredient.module.css";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {getIngredientsSelector,} from "../../store/action-selector";
import { useAppDispatch,useAppSelector } from "../../types/hook";
import Modal from "../../components/modal/modal";
import { TIngredient, TIngredients} from "../../types";

function SingleIngredient() {
  const navigate = useNavigate(); 
  const location = useLocation();
  const background = location.state;
  const { ingId } = useParams();
  const dispatch = useAppDispatch();

  const cards:TIngredients[] = useAppSelector(getIngredientsSelector);
  
  if (cards.length === 0) return null;
     
  const ingredient = () =>{  
    const singl = cards.filter((item) => item.ingredient._id === ingId);
    const ingrad: TIngredient = singl[0].ingredient;    
    return ingrad }
  
  const onClose = () => {
     navigate('/');  
  };

  if (background) {
   return (
      <div>        
        <Modal onClose={onClose}>
          <IngredientDetails ingredient= {ingredient()} />
        </Modal>    
      </div>
    );
  } else {
    return (
      <div className={styles.singleIngredient}>
        <IngredientDetails ingredient={ingredient()}></IngredientDetails>
      </div>
    );
  }
}
export default SingleIngredient;


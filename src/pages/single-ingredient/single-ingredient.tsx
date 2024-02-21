import React, { useEffect } from "react";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import styles from "./single-ingredient.module.css";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {getIngredientsSelector,
  getIngredientsSelectornew,
  } from "../../store/action-selector";
import { useAppDispatch,useAppSelector } from "../../types/hook";
import Modal from "../../components/modal/modal";
import Main from "../../components/main/main";
import { fetchListnew } from "../../store/ingredients-slicenew";
import { TIngredient, TIngredients} from "../../types";

function SingleIngredient() {
  const navigate = useNavigate(); 
  const location = useLocation();
  const background = location.state;
  const { ingId } = useParams();
  const dispatch = useAppDispatch();
  

  useEffect(() => {
    dispatch(fetchListnew());
  }, []);

  const cards:TIngredients[] = useAppSelector(getIngredientsSelector);
  const cardsnew:TIngredients[] = useAppSelector(getIngredientsSelectornew);

  if (cards.length === 0) return null;
  if (cardsnew.length === 0) return null;
    
  const ingredient = () =>{
    if (background){
    const singl = cards.filter((item) => item.ingredient._id === ingId);
    const ingrad: TIngredient = singl[0].ingredient;    
    return ingrad }

    else{
      const singl = cardsnew.filter((item) => item.ingredient._id === ingId);
      const ingrad: TIngredient  = singl[0].ingredient;
      return ingrad }

    
  };
  
  const onClose = () => {
     navigate('/');  
  };

  const onBack = () => {
    navigate("/"); 

 };
  
  if (background) {

   return (
      <div>
        <Main></Main>          
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

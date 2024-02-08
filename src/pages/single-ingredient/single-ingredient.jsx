import React from "react";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import styles from "./single-ingredient.module.css";
import { useParams } from "react-router-dom";
import {
  getIngradientsSelector,
  getIngradientSelector,
} from "../../store/action-selector";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchList } from "../../store/ingradients-slice";

function SingleIngredient() {

  const { ingId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  const cards = useSelector(getIngradientsSelector);
   
  if (cards.length === 0) return null

  console.log("00000");
   console.log(cards); 
      
  const getingredient = () => {
    let len = cards.length;
    for (let i = 0; i < len; i++){
        
        let item = cards[i];
        console.log("1111111");
        console.log(item);

        if (item.ingradient._id === ingId){
            console.log("22222");
            console.log(item.ingradient);      
           return item.ingradient;
        }
   }}
   const ingrad = getingredient();
   console.log("33333");
   console.log(ingrad);      

  return (
    <div className={styles.singleIngredient}>
      <IngredientDetails ingradient={ingrad}></IngredientDetails>
    </div>
  );
}

export default SingleIngredient;

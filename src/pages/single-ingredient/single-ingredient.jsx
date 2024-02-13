import React, { useEffect, useState } from "react";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import styles from "./single-ingredient.module.css";
import { useParams, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {getIngradientsSelector,
  getIngradientsSelectornew,
  } from "../../store/action-selector";
import { useDispatch, useSelector } from "react-redux";

import Modal from "../../components/modal/modal";
import Main from "../../components/main/main";
import { fetchListnew } from "../../store/ingradients-slicenew";

function SingleIngredient() {

  const [one, setOne] = useState('2')
  const navigate = useNavigate(); 
  const location = useLocation();
  const background = location.state;
  const { ingId } = useParams();
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchListnew());
  }, []);

  const cards = useSelector(getIngradientsSelector);
  const cardsnew = useSelector(getIngradientsSelectornew);

  if (cards.length === 0) return null;
  if (cardsnew.length === 0) return null;
   console.log('777777');
    console.log(background);
    console.log(cards);

  
  const ingradient= () =>{
    if (background){
    const singl = cards.filter((item) => item.ingradient._id === ingId);
    const ingrad = singl[0].ingradient;
    console.log('666666');
    console.log(ingrad);
    return ingrad; }
    else{
      const singl = cardsnew.filter((item) => item.ingradient._id === ingId);
      const ingrad = singl[0].ingradient;
      console.log('5555555555');
      console.log(ingrad);
      return ingrad; }
     
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
          <IngredientDetails ingradient={ingradient()} />
        </Modal>
      
      </div>
    );
  } else {
    return (
      <div className={styles.singleIngredient}>
        <IngredientDetails ingradient={ingradient()}></IngredientDetails>
      </div>
    );
  }
}

export default SingleIngredient;

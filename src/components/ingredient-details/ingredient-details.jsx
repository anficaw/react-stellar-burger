import React from "react";
import styles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";
import { getIngradientSelector } from "../store/action-selector";


function IngredientDetails({ingradient}) {
  
  /*const ingradient = useSelector(getIngradientSelector);*/

  return (
    <section className={styles.ingredientdetails}>
      <p className=" mt-10 mr-10 text text_type_main-large">
        Детали ингредиента
      </p>
      <img src={ingradient.image_large} alt={ingradient.name} />
      <p className=" mt-4 mb-8 text text_type_main-medium">{ingradient.name}</p>
      <div className={styles.detales}>
        <div className={styles.detale}>
          <p className="  mb-2  text text_type_main-default text_color_inactive">
            Калории, ккал
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {ingradient.calories}
          </p>
        </div>
        <div className={styles.detale}>
          <p className=" mb-2 text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="  text text_type_main-default text_color_inactive">
            {ingradient.proteins}
          </p>
        </div>
        <div className={styles.detale}>
          <p className=" mb-2 text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="   text text_type_main-default text_color_inactive">
            {ingradient.fat}
          </p>
        </div>
        <div className={styles.detale}>
          <p className=" mb-2 text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="   text text_type_main-default text_color_inactive">
            {ingradient.carbohydrates}
          </p>
        </div>
      </div>
    </section>
  );
}
export default IngredientDetails;

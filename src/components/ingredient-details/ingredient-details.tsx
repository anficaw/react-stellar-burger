import React from "react";
import styles from "./ingredient-details.module.css";
import { TIngredient } from "../../types";

type TIngredientDetailsprops = {
  ingredient: TIngredient,
}

function IngredientDetails(props: TIngredientDetailsprops) {

  const ingredient: TIngredient = props.ingredient;

  return (

    <section className={styles.ingredientdetails}>
      <p className=" mt-10 mr-10 text text_type_main-large">
        Детали ингредиента
      </p>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <p className=" mt-4 mb-8 text text_type_main-medium">{ingredient.name}</p>
      <div className={styles.detales}>
        <div className={styles.detale}>
          <p className="  mb-2  text text_type_main-default text_color_inactive">
            Калории, ккал
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {ingredient.calories}
          </p>
        </div>
        <div className={styles.detale}>
          <p className=" mb-2 text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="  text text_type_main-default text_color_inactive">
            {ingredient.proteins}
          </p>
        </div>
        <div className={styles.detale}>
          <p className=" mb-2 text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="   text text_type_main-default text_color_inactive">
            {ingredient.fat}
          </p>
        </div>
        <div className={styles.detale}>
          <p className=" mb-2 text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="   text text_type_main-default text_color_inactive">
            {ingredient.carbohydrates}
          </p>
        </div>
      </div>
    </section>
  );
}
export default IngredientDetails;

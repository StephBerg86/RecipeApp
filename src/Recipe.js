import React from "react";
import style from "./recipe.module.css";

export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ul>
        <h4>Ingredients:</h4>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <h4>Calories: {Math.round(calories)}</h4>
      <img className={style.image} src={image} alt=""></img>
    </div>
  );
}

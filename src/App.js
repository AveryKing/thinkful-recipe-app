import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

const  App = () => {
  const [recipes, setRecipes] = useState(RecipeData);
  const deleteRecipe = (recipeIndex) => {
    setRecipes(recipes.filter((recipe, index)=>index !== recipeIndex));
  }
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate recipes={recipes} setRecipes={setRecipes}/>
    </div>
  );
}

export default App;
import React from "react";
import Recipe from './Recipe'

const RecipeList = ({recipes, deleteRecipe}) => {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr className="tableHeader">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tableRows">
            {recipes.map((recipe, index) => (
    <Recipe
      key={index}
      recipe={recipe}
      deleteRecipe={() => deleteRecipe(index)}/>
  )) }
        </tbody>
      </table>
    </div>
  );
}


export default RecipeList;
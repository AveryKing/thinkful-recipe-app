import React from "react";
const Recipe = ({recipe, deleteRecipe}) => {
  return (
        <tr className="row">
          <td>{recipe.name}</td>
          <td>{recipe.cuisine}</td>
          <td className="photo">
            <img src={recipe.photo} alt="" className="photoFit"/>
          </td>
          <td className="content_td"><p>{(recipe.ingredients)}</p></td>
          <td className="content_td"><p>{(recipe.preparation)}</p></td>
          <td>
            <button name="delete" onClick={deleteRecipe}>Delete</button>
          </td>
        </tr>
  )
}

export default Recipe;
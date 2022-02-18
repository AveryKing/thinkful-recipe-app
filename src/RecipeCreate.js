import React, { useState } from "react";


const RecipeCreate = ({recipes, setRecipes}) => {
   const starterForm = {
   name: '',
   cuisine: '',
   photo: '',
   ingredients: '',
   preparation: ''
 };

   const [data, setData] = useState({...starterForm});
  const handleChange = ({target}) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, data]);
    setData({...starterForm});
  }
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td htmlFor="name">
             <input
               id="name"
               type="text"
               name="name"
               onChange={handleChange}
               value={data.name}
               placeholder="Name"
             />
            </td>
            <td htmlFor="cuisine">
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={data.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td htmlFor="photo">
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={handleChange}
                value={data.photo}
                placeholder="URL"
              />
            </td>
            <td htmlFor="ingredients">
              <textarea
                id="ingredients"
                type="textarea"
                name="ingredients"
                onChange={handleChange}
                value={data.ingredients}
                placeholder="Ingredients"
              />
            </td>
            <td htmlFor="preparation">
              <textarea
                id="preparation"
                type="textarea"
                name="preparation"
                onChange={handleChange}
                value={data.preparation}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
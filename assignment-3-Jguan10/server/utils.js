export const formatFoodData = (data) => {
  return {
    id: data.idMeal,
    type: "Food",
    name: data.strMeal,
    category: data.strCategory,
    recipe: `http://localhost:3000/id/${data.idMeal}?type=food`,
    img: data.strMealThumb,
  };
};

export const formatDrinkData = (data) => {
  return {
    id: data.idDrink,
    type: "Drink",
    name: data.strDrink,
    category: data.strCategory,
    recipe: `http://localhost:3000/id/${data.idDrink}?type=drink`,
    img: data.strDrinkThumb,
  };
};

export const formatFoodRecipe = (meal) => {
  let resultHTML = `
    <div style = "...">
      <img src = "${meal.strMealThumb}"/>
      <div>ID: ${meal.idMeal}</div>
      <div>Type: Food</div>
      <div>Name: ${meal.strMeal}</div>
      <div>Category: ${meal.strCategory}</div>
      <div>Instructions: ${meal.strInstructions}</div>
      <div>Ingredients: </div>
    `;

  for (let i = 1; i <= 15; i++) {
    if (meal[`strIngredient${i}`]) {
      const ingredient = meal[`strIngredient${i}`];
      const measurement = meal[`strMeasure${i}`];
      resultHTML += `<div> ${ingredient} - ${
        measurement ? measurement : " "
      } </div>`;
    } else {
      break;
    }
  }

  resultHTML += "</div>";
  return resultHTML;
};

export const formatDrinkRecipe = (drink) => {
  let resultHTML = `
  <div style = "...">
    <img src = "${drink.strDrinkThumb}"/>
    <div>ID: ${drink.idDrink}</div>
    <div>Type: Drink</div>
    <div>Name: ${drink.strDrink}</div>
    <div>Category: ${drink.strCategory}</div>
    <div>Instructions: ${drink.strInstructions}</div>
    <div>Ingredients: </div>`;

  for (let i = 1; i <= 15; i++) {
    if (drink[`strIngredient${i}`]) {
      const ingredient = drink[`strIngredient${i}`];
      const measurement = drink[`strMeasure${i}`];
      resultHTML += `<div> ${ingredient} - ${
        measurement ? measurement : " "
      } </div>`;
    } else {
      break;
    }
  }

  resultHTML += "</div>";
  return resultHTML;
};

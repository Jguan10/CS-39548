console.clear();

import {
  formatDrinkData,
  formatFoodData,
  formatFoodRecipe,
  formatDrinkRecipe,
} from "./utils.js";

import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// CORS middleware to allow our server to receive requests from any URL source.
app.use(cors());

// We will expect JSON data as the common format used to receive/send data to/from this server.
// i.e. incoming requests will have header Content-Type as application/json, and server will respond with JSON response.
app.use(express.json());
app.use(express.urlencoded());

// Simple / root path to help verify server is up and running.
app.get("/", (req, res) => {
  res.send("ExpressJS server response OK!");
});

app.post("/search", async (req, res) => {
  const searchQuery = req.body.searchQuery;
  const searchFood = req.body.searchFood;
  const searchDrink = req.body.searchDrink;

  if (searchFood && searchDrink) {
    const foodData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
    )
      .then((foodRes) => foodRes.json())
      .then((data) => {
        return data.meals.map(formatFoodData);
      });

    const drinkData = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
    )
      .then((drinkRes) => drinkRes.json())
      .then((data) => {
        return data.drinks.map(formatDrinkData);
      });
    res.send([...foodData, ...drinkData]);
  } else if (searchFood) {
    const foodData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
    )
      .then((foodRes) => foodRes.json())
      .then((data) => {
        return data.meals.map(formatFoodData);
      });
    res.send(foodData);
  } else if (searchDrink) {
    const drinkData = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
    )
      .then((drinkRes) => drinkRes.json())
      .then((data) => {
        return data.drinks.map(formatDrinkData);
      });
    res.send(drinkData);
  }
});

app.get("/search", (req, res) => {});

app.get("/id/:ID", (req, res) => {
  if (req.query.type === "food") {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${req.params.ID}`
    )
      .then((mealRes) => mealRes.json())
      .then((data) => {
        res.send(formatFoodRecipe(data.meals[0]));
      });
  } else if (req.query.type === "drink") {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${req.params.ID}`
    )
      .then((ctRes) => ctRes.json())
      .then((data) => {
        res.send(formatDrinkRecipe(data.drinks[0]));
      });
  } else {
    res.status(400).send("Not a valid food/drink ID.");
  }
});

app.get("/random/food", (req, res) => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((foodRes) => foodRes.json())
    .then((data) => {
      return res.send(data.meals.map(formatFoodData));
    });
});

app.get("/random/drink", (req, res) => {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((drinkRes) => drinkRes.json())
    .then((data) => {
      return res.send(data.drinks.map(formatDrinkData));
    });
});

app.listen(port, () => {
  console.log(`ExpressJS server listening on PORT: ${port}`);
});

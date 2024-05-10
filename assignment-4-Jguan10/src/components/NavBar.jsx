import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../shop";
import { Link } from "react-router-dom";

const NavBar = () => {
  const items = useSelector((state) => state.shop.value);
  const dispatch = useDispatch();
  const addRandomFood = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        const newRandomFoodItem = {
          name: data.meals[0].strMeal,
          imageSrc: data.meals[0].strMealThumb,
          price: getRandomInt(1, 6),
        };
        dispatch(addItem(newRandomFoodItem));
      });
  };

  const addRandomDrink = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        const newRandomDrinkItem = {
          name: data.drinks[0].strDrink,
          imageSrc: data.drinks[0].strDrinkThumb,
          price: getRandomInt(1, 6),
        };
        dispatch(addItem(newRandomDrinkItem));
      });
  };

  function getRandomInt(min, max) {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt) + minInt);
  }

  return (
    <div id="nav-bar">
      <div id="random-nav">
        <div onClick={addRandomFood}>Add Random Food</div>
        <div onClick={addRandomDrink}>Add Random Drink</div>
      </div>
      <div id="page-nav">
        <Link to="/">Menu</Link>
        <Link to="/cart">Cart ({items.length})</Link>
      </div>
    </div>
  );
};

export default NavBar;

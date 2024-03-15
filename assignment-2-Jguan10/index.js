/*
 * Feel free to modify this file to your liking.
 * */

// POS Data to help you get started, feel free to replace the pricing/naming or not use this altogether.
const POS_DATA = {
  foodItems: [
    {
      name: "Fried Chicken",
      price: 7.99,
      imageSrc: "./assets/img/food/food1.png",
    },
    {
      name: "Garlic Chicken",
      price: 8.5,
      imageSrc: "./assets/img/food/food2.png",
    },
    {
      name: "Stir Fry Noodles",
      price: 5.0,
      imageSrc: "./assets/img/food/food3.png",
    },
    { name: "Hamburger", price: 6.0, imageSrc: "./assets/img/food/food4.png" },
    { name: "Taco", price: 3.99, imageSrc: "./assets/img/food/food5.png" },
    { name: "Salad", price: 4.59, imageSrc: "./assets/img/food/food6.png" },
    {
      name: "Chicken Rice",
      price: 7.25,
      imageSrc: "./assets/img/food/food7.png",
    },
    { name: "Shrimp", price: 5.0, imageSrc: "./assets/img/food/food8.png" },
    {
      name: "Avocado Toast",
      price: 3.75,
      imageSrc: "./assets/img/food/food9.png",
    },
    {
      name: "Beef Tartar",
      price: 4.5,
      imageSrc: "./assets/img/food/food10.png",
    },
    { name: "Edamame", price: 2.25, imageSrc: "./assets/img/food/food11.png" },
    {
      name: "Steak Sandwich",
      price: 8.0,
      imageSrc: "./assets/img/food/food12.png",
    },
  ],
  drinkItems: [
    {
      name: "Tequila Sunrise",
      price: 7.0,
      imageSrc: "./assets/img/drinks/drink1.png",
    },
    {
      name: "Old Fashion",
      price: 7.5,
      imageSrc: "./assets/img/drinks/drink2.png",
    },
    {
      name: "Blue Hawaii",
      price: 6.5,
      imageSrc: "./assets/img/drinks/drink3.png",
    },
    {
      name: "Gin and Tonic",
      price: 5.0,
      imageSrc: "./assets/img/drinks/drink4.png",
    },
    {
      name: "Margarita",
      price: 5.0,
      imageSrc: "./assets/img/drinks/drink5.png",
    },
    { name: "Coke", price: 1.75, imageSrc: "./assets/img/drinks/drink6.png" },
    { name: "Pepsi", price: 1.75, imageSrc: "./assets/img/drinks/drink7.png" },
    { name: "Sprite", price: 1.75, imageSrc: "./assets/img/drinks/drink8.png" },
  ],
  dessertItems: [
    {
      name: "Cheesecake",
      price: 4.99,
      imageSrc: "./assets/img/dessert/dessert1.png",
    },
    {
      name: "Creme Brule",
      price: 5.99,
      imageSrc: "./assets/img/dessert/dessert2.png",
    },
    {
      name: "Macaroon",
      price: 3.25,
      imageSrc: "./assets/img/dessert/dessert3.png",
    },
    {
      name: "Sundae",
      price: 4.5,
      imageSrc: "./assets/img/dessert/dessert4.png",
    },
  ],
};

window.onload = () => {
  const inventory = document.getElementById("inventory");

  // Clear HTML examples
  inventory.removeChild(inventory.children[0]);
  const receipt = document.getElementById("receipt");
  receipt.removeChild(receipt.children[0]);

  // Render food items
  for (let i = 0; i < 12; i++) {
    const sampleFoodData = POS_DATA.foodItems[i];

    const sampleFoodMenuItem = document.createElement("div");
    sampleFoodMenuItem.className = "menu-item";

    sampleFoodMenuItem.addEventListener("click", () => {
      alert("Clicked this food!");
    });

    const sampleFoodImage = document.createElement("img");
    sampleFoodImage.className = "item-image";
    sampleFoodImage.src = sampleFoodData.imageSrc;

    const sampleFoodName = document.createElement("div");
    sampleFoodName.className = "item-name";
    sampleFoodName.innerText = sampleFoodData.name;

    const sampleFoodPrice = document.createElement("div");
    sampleFoodPrice.className = "item-price";
    sampleFoodPrice.innerText = "$" + sampleFoodData.price;

    sampleFoodMenuItem.appendChild(sampleFoodImage);
    sampleFoodMenuItem.appendChild(sampleFoodName);
    sampleFoodMenuItem.appendChild(sampleFoodPrice);

    inventory.appendChild(sampleFoodMenuItem);
  }

  // Render drink items
  for (let i = 0; i < 8; i++) {
    const sampleDrinkData = POS_DATA.drinkItems[i];

    const sampleDrinkMenuItem = document.createElement("div");
    sampleDrinkMenuItem.className = "menu-item";

    // This example also includes adding a click handler for the item.
    // Though, this is not the ONLY way to do so.
    sampleDrinkMenuItem.addEventListener("click", () => {
      alert("Clicked this drink!");
    });

    const sampleDrinkImage = document.createElement("img");
    sampleDrinkImage.className = "item-image";
    sampleDrinkImage.src = sampleDrinkData.imageSrc;

    const sampleDrinkName = document.createElement("div");
    sampleDrinkName.className = "item-name";
    sampleDrinkName.innerText = sampleDrinkData.name;

    const sampleDrinkPrice = document.createElement("div");
    sampleDrinkPrice.className = "item-price";
    sampleDrinkPrice.innerText = "$" + sampleDrinkData.price;

    sampleDrinkMenuItem.appendChild(sampleDrinkImage);
    sampleDrinkMenuItem.appendChild(sampleDrinkName);
    sampleDrinkMenuItem.appendChild(sampleDrinkPrice);

    inventory.appendChild(sampleDrinkMenuItem);
  }

  // Render dessert items
  for (let i = 0; i < 4; i++) {
    const sampleDessertData = POS_DATA.dessertItems[i];

    const sampleDessertMenuItem = document.createElement("div");
    sampleDessertMenuItem.className = "menu-item";

    // This example also includes adding a click handler for the item.
    // Though, this is not the ONLY way to do so.
    sampleDessertMenuItem.addEventListener("click", () => {
      alert("Clicked this dessert!");
    });

    const sampleDessertImage = document.createElement("img");
    sampleDessertImage.className = "item-image";
    sampleDessertImage.src = sampleDessertData.imageSrc;

    const sampleDessertName = document.createElement("div");
    sampleDessertName.className = "item-name";
    sampleDessertName.innerText = sampleDessertData.name;

    const sampleDessertPrice = document.createElement("div");
    sampleDessertPrice.className = "item-price";
    sampleDessertPrice.innerText = "$" + sampleDessertData.price;

    sampleDessertMenuItem.appendChild(sampleDessertImage);
    sampleDessertMenuItem.appendChild(sampleDessertName);
    sampleDessertMenuItem.appendChild(sampleDessertPrice);

    inventory.appendChild(sampleDessertMenuItem);
  }
};

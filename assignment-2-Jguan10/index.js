// Contains all food for inventory
const INVEN_DATA = {
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
  const receiptList = document.getElementsByClassName("receipt-item-list")[0];
  const receipt_total = document.getElementById("total-amount-text");
  let total_price = 0;

  // Clear HTML examples
  inventory.removeChild(inventory.children[0]);
  receiptList.removeChild(receiptList.children[0]);

  // Render menu items
  for (let i = 0; i < 24; i++) {
    const sampleFoodData = INVEN_DATA.foodItems[i];

    const sampleFoodMenuItem = document.createElement("div");
    sampleFoodMenuItem.className = "menu-item";

    const sampleFoodImage = document.createElement("img");
    sampleFoodImage.className = "item-image";
    sampleFoodImage.src = sampleFoodData.imageSrc;

    const sampleFoodName = document.createElement("div");
    sampleFoodName.className = "item-name";
    sampleFoodName.innerText = sampleFoodData.name;

    const sampleFoodPrice = document.createElement("div");
    sampleFoodPrice.className = "item-price";
    sampleFoodPrice.innerText = "$" + sampleFoodData.price;

    // Adding item functionality
    sampleFoodMenuItem.addEventListener("click", () => {
      // Format item for receipt list
      const receiptItem = document.createElement("div");
      receiptItem.className = "receipt-item";
      receiptItem.innerText =
        sampleFoodData.name + " - " + sampleFoodPrice.innerText;

      // Add button to receipt list
      const button = document.createElement("button");
      button.textContent = "x";

      //Button functionality
      button.addEventListener("click", () => {
        receiptItem.remove();
        total_price -= sampleFoodData.price;
        total_price = Math.round(total_price * 100) / 100;
        receipt_total.innerText = "Total: $" + total_price;
      });
      receiptItem.appendChild(button);
      receiptList.appendChild(receiptItem);

      // Add price to total
      total_price += sampleFoodData.price;
      total_price = Math.round(total_price * 100) / 100;
      receipt_total.innerText = "Total: $" + total_price;
    });

    sampleFoodMenuItem.appendChild(sampleFoodImage);
    sampleFoodMenuItem.appendChild(sampleFoodName);
    sampleFoodMenuItem.appendChild(sampleFoodPrice);

    inventory.appendChild(sampleFoodMenuItem);
  }
};

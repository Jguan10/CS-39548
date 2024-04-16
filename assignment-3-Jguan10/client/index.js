const sendSearchRequest = () => {
  const searchQuery = document.getElementById("search-query").value;

  // Get the state of the food and drink checkboxes
  const searchFood = document.getElementById("search-food").checked;
  const searchDrink = document.getElementById("search-drink").checked;

  if (searchQuery) {
    fetch("http://localhost:3000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchQuery: searchQuery,
        searchFood: searchFood,
        searchDrink: searchDrink,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const resultContainer = document.getElementById("result-container");
        resultContainer.innerHTML = " ";
        data.forEach((result) => {
          resultContainer.innerHTML += `
          <div style = "...">
            <img src = "${result.img}"/>
            <div> ID: ${result.id}</div>
            <div> Type: ${result.type}</div>
            <div> Name: ${result.name}</div>
            <div> Category: ${result.category}</div>
            <a href = ${result.recipe}>Recipe</a>
          </div>`;
        });
      });
  }
};

const sendRandomRequest = () => {
  const searchFood = document.getElementById("search-food").checked;
  const searchDrink = document.getElementById("search-drink").checked;

  if (searchFood) {
    fetch("http://localhost:3000/random/food")
      .then((response) => response.json())
      .then((data) => {
        const resultContainer = document.getElementById("result-container");
        resultContainer.innerHTML = " ";
        data.forEach((result) => {
          resultContainer.innerHTML += `
          <div style = "...">
            <img src = "${result.img}"/>
            <div> ID: ${result.id}</div>
            <div> Type: ${result.type}</div>
            <div> Name: ${result.name}</div>
            <div> Category: ${result.category}</div>
            <a href = ${result.recipe}>Recipe</a>
          </div>`;
        });
      });
  }
  if (searchDrink) {
    fetch("http://localhost:3000/random/drink")
      .then((response) => response.json())
      .then((data) => {
        const resultContainer = document.getElementById("result-container");
        resultContainer.innerHTML = " ";
        data.forEach((result) => {
          resultContainer.innerHTML += `
          <div style = "...">
            <img src = "${result.img}"/>
            <div> ID: ${result.id}</div>
            <div> Type: ${result.type}</div>
            <div> Name: ${result.name}</div>
            <div> Category: ${result.category}</div>
            <a href = ${result.recipe}>Recipe</a>
          </div>`;
        });
      });
  }
};

// Wait for window to be loaded!
window.onload = () => {
  // Handles search requests
  const searchButton = document.getElementById("search-btn");
  searchButton.addEventListener("click", sendSearchRequest);

  // Handles random requests
  const randomButton = document.getElementById("random-btn");
  randomButton.addEventListener("click", sendRandomRequest);
};

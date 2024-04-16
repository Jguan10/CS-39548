[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/SSo3Z67-)
## Assignment 3
### Due Date: 4/1/2024 - 11:59 EST

*Assignment deadlines are strictly enforced, please do try to hand in your assignments on time, and I will honor your commitment by grading them and giving feedback in a timely manner. I do understand that sometimes there may be emergencies that we need to attend to. Please do reach out to me as soon as possible if you know you won't be able to make a deadline.*

## Assignment Overview

For this assignment, you will be working to implement a recipe (food/drink) search interface, part of which, the template code has been written for you. 
You will be responsible for building out the functionality on both the frontend and the backend. On the frontend/client side, you will be given a template code, and will be required to implement some vanilla JS code to
help your app communicate with our ExpressJS server that's our backend. On the backend side, you will be working with NodeJS to implement an ExpressJS server that will serve as an intermediate service between your FE code, and the APIs below in the next section.

Unlike your previous assignment, you modify any files that are given to you to help you achieve your goals. You are also free to import in any JS libraries that you would find helpful with completing your assignment!

## API Description

- https://www.themealdb.com/api.php
- https://www.thecocktaildb.com/api.php

To keep in theme with our class this semester, these APIs provide services to help look up a databases of food & drink recipes, and you are required to interact with them BOTH as part of this assignment. These two APIs are free and publicly available, and as such, should be used conservatively (try not to spam the endpoint too much, or overload it with multiple calls in a short time frame).

To get started with the assignment, I would first try and familiarize yourself with some of the endpoints (i.e. how are they called? what data do they return? etc...), and keep them in mind as you read through the assignment
requirements, and determine how (if possible) you can use some of these endpoints to achieve the requirements.

## Assignment Requirements

![template-starter.png](assets%2Ftemplate-starter.png)

You're given starter/template code that will render the above search UI/frontend client, as well as a Node+Express JS project setup that will run an ExpressJS server at port `3000`! The template code can be found in their respective `client` and `server` folders. Feel free to modify them as much as you'd like to meet the assignment requirements below.

## Server Requirements (65%)

For the server requirements, we will need to implement the 4 below endpoints. In all these endpoints, you will be contacting the 2 food APIs that we will be working with above to search their  databases for the necessary data the be returned back to our client for rendering. See each endpoint requirement/description below for further details!

Your server starter code has already been given to you as a NodeJS project. To start up the server/template code, simply run `npm i` in the `server` directory to install all the dependencies defined in our `package.json` file. This will install our ExpressJS module, along with a few other modules like `nodemon` and `node-fetch` to help you along the way. Feel free to modify this node project as you wish, pulling in more modules that you might find useful to help with your assignment.

*Note: there is already a `.gitignore` file provided to prevent you from accidentally adding the `node_modules` folder as part of your git commit.

### 1. POST /search
```
Request: POST http://localhost:3000/search with search data being sent as part of the request body
Response: Respond with data from the 3rd-party APIs to render our results (if any) on the client UI.
```
- This endpoint on our server will handle all `POST` requests that are directed at the `/search` route.
- As part of the `POST` request, JSON data will be sent as part of the body of this request that should describe what we are searching.
- How you structure the request body JSON object is totally up to you! Pick a structure that makes sense!
- This endpoint will then respond with the necessary data to render the results on the UI. See UI requirements below on what is needed to be rendered.

### 2. GET /random/food
```
Request: GET http://localhost:3000/random/food
Response: Respond with ONE random FOOD data from the 3rd-party API, to be rendered on the client UI
```
- This endpoint on our server handles all `GET` requests that are directed at the `/random/food` endpoint.
- This will have a similar response as `/search`, except it will only return ONE random FOOD data to be rendered on the UI.
- Exactly identical to `/random/drink` except this will only return FOOD related results.

### 3. GET /random/drink
```
Request: GET http://localhost:3000/random/drink
Response: Respond with ONE random DRINK data from the 3rd-party API, to be rendered on the client UI
```
- This endpoint on our server handles all `GET` requests that are directed at the `/random/drink` endpoint.
- This will have a similar response as `/search`, except it will only return ONE random DRINK data to be rendered on the UI.
- Exactly identical to `/random/food` except this will only return DRINK related results.

### 4. GET /id/<:ID>?type=<:TYPE>
```
Request: POST http://localhost:3000/id/<:ID>?type=<food|drink> 
         where <:ID> can be a valid food ID that was retrieved from the 3rd party API 
         and ?type= being a query param that determines if it's a "food" or a "drink".
Response: Respond with a SERVER SIDE RENDERED result of the given food ID.
```
- This endpoint on our server will handle all `GET` request sent to `/id/<:ID>` endpoint.
- `<:ID>` can vary and be any valid (or non-valid) id that we can use to search the 3rd-party APIs with.
- `?type=<food|drink>` is a query parameter can only be 1 of 2 strings: `"food"` or `"drink"` to denote if an id is a food or drink id.

## Client/UI Requirements (35%)

For the client/UI requirements, you will essentially be implementing the functionality of the search interface, wiring up click events, rendering results, and most importantly, making API calls to our ExpressJS server. See below for the functionalities to implement, and details on which of our 4 ExpressJS endpoints they each tie into.

### 1. Searching
![search-ex.png](client%2Fassets%2Fsearch-ex.png)
- To search for results, you will need at least 2 things:
  - A search term, typed into the input provided next to the "Search" button.
  - At least ONE of the 2 checkboxes checked, denoting if the term to search is either a food item, a drink item, or both.
  - If either one of the above to requirements aren't met, clicking search should NOT send a request to our ExpressJS server.
- Triggering a search will send a `POST` request to our `/search` endpoint that we defined above as part of #1 server requirement.
- Results should be rendered with the following info: the item's name, id#, type (food or drink), category and a link to the recipe page (more info about it below). 

Example render:

![result-ex.png](client%2Fassets%2Fresult-ex.png)
- If an image is not provided by the 3rd party APIs, render a placeholder instead (asset provided in the template code)

### 2. Recipe Link
- As part of the results being rendered, each item should have an anchor link to a recipe detail page.
- This will be handled by sending a `GET` request to our `/id/<:ID>?type=<:TYPE` endpoint above that we defined as #4 of the server requirement.
- This will fetch the particular item using the id provided against either the meal/cocktail API, and render a recipe page, SERVER SIDE.
  - Meaning we will be sending back a rendered HTML content as part of the response for this endpoint.
  - It should render a blank/"no-results" page if we are not able to retrieve the data.
- The recipe page should contain what we have on the results page, minus the recipe link itself.
- It should also contain the recipe and ingredients + quantity used as part of the recipe.

Example render:

![recipe-ex.png](client%2Fassets%2Frecipe-ex.png)
- Note the URL: `http://localhost:3000/id/12618?type=drink` - This page is a result of the response from the server handling the `GET` request for this URL.

### 3. Random
![random-ex.png](client%2Fassets%2Frandom-ex.png)
- Clicking the random button should send a `GET` request to either of the 2 random endpoints we defined as #2 and #3 above as part of the server requirements.
- If either "Food" or "Drinks" is checked, it should retrieve the respective random food/drink.
- It should then render the result, similar to the way we render results for searching.

### 4. Styling (Optional)
- Lastly, feel free to style this to make the UI a bit more friendly.
- Since this assignment is really to help you all practice your JS/making API calls/writing serer code, styling this assignment is totally optional!

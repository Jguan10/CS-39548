[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/CrI61Ptk)
## Assignment 4
### Due Date: 5/1/2024 - 11:59 EST

*Assignment deadlines are strictly enforced, please do try to hand in your assignments on time, and I will honor your commitment by grading them and giving feedback in a timely manner. I do understand that sometimes there may be emergencies that we need to attend to. Please do reach out to me as soon as possible if you know you won't be able to make a deadline.*

## Assignment Overview

For this assignment, you'll be using the ReactJS frameworks to build out the frontend portion of your app. It will be similar to the food ordering POS system that we did for assignment 2, along with making an API call directly from our frontend to the two 3rd party APIs we worked with in our previous assignment!

You'll be given a starter code to start with, it's essentially a `create-react-app` template that I have modified to help you get started. You'll notice that the menu items have already been rendered for you, along with an API call being wired up and a few components already written for you. Your goal for this assignment is to accomplish the requirements below, which will help you practice working with ReactJS.

## Setup/Getting Started

- To start up the app, simply navigate to the root of the project folder (where `package.json` is) and run the `npm i` command to install all the dependencies.
- Next run `npm run start` to start up your ReactJS app.
- A browser window should automatically open with the URL directed at `http://localhost:3000`
- You should see the starter page below:

![starterPage.png](src%2Fassets%2FstarterPage.png)

Feel free to pull in any additional libraries/packages as you see fit, the only hard requirement for this assignment is for this to run as a ReactJS app. Thus, you should not remove any of existing (ReactJS) packages that came with this starter code.

## Requirements

For this assignment, we will break up the requirements into a few sections listed below, along with the grading percentages.

### 1) Nav Bar (40%)

- The menu component should already been rendered for you as part of the starter code.
- You should implement the functionality of each of the navbar items that are currently rendered:
  - `Add Random Food`: Clicking on this should send an API call to the `https://www.themealdb.com/api/json/v1/1/random.php` meal DB api endpoint to retrieve a random food item data, and add that food data to the "Cart"
  - `Add Random Drink`: Clicking on this should send an API call to the `https://www.thecocktaildb.com/api/json/v1/1/random.php` cocktail DB api endpoint to retrieve a random drink item data, and add that drink data to the "Cart"
  - `Menu`: Clicking on this should direct the user back to the main menu page with all the menu items listed for you.
  - `Cart(n)`: Clicking on this should bring the user to the cart page, where all the current items in the "Cart" will be listed. Also note that this menu item should be render with the number if items currently in the cart. (i.e `Cart(1)`, `Cart(234)`, etc...)

### 2) Menu Page/Section (25%)

- This section should already have been rendered for you, with the food items that we worked with for Assignment 2!
- Clicking on a food item should add it to the "Cart", and should update the `Cart(n)` link on the nav menu accordingly (i.e every time you add an item, the count should go up on the nav menu).

### 3) Cart Page (35%)

- This page is reached/rendered by clicking on the `Cart(n)` nav menu item as outlined above in requirement #1.
- There is no started code for this page, and you will need to code it up from scratch!
- The nav bar should still be visible on this page, so that the user can click on "Menu" to go back to the main menu page.
- On this page, there should be a "Clear" `<button>` element at the top of the page (below the nav bar).
  - Clicking on this button should clear out all the items in the "Cart"
- The rest of the cart page should list out all the items that are currently in the cart, rendering a thumbnail image of the item, the item name, and the price.
  - For the random food/drink items, we should assign a random price of $1-5.
  - For the other default food/drink/dessert items from assignment 2, pricing data should be provided for you.

## Demo

To help you visualize this and to avoid any ambiguity with the requirements, I've recorded a short demo of how the app should behave, and how I will be interfacing with it to test/grade your assignment. You can view the video below that I've uploaded to our recitation lecture file share:

https://drive.google.com/file/d/1QGVeW6f_b-NPEWbHscXOGoJ5iS15zDc2/view?usp=sharing

As always, feel free to reach out over Slack if you have any questions, or schedule an office hr if you feel like you're stuck with this assignment!
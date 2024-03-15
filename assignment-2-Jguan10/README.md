[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/QzXe0TtG)
## Assignment 2
### Due Date: 3/13/24 - 11:59 EST

*Assignment deadlines are strictly enforced, please do try to hand in your assignments on time, and I will honor your commitment by grading them and giving feedback in a timely manner. I do understand that sometimes there may be emergencies that we need to attend to. Please do reach out to me as soon as possible if you know you won't be able to make a deadline.*

## Assignment Description

Assignment 2 will help you practice your frontend Javascript, by using it to dynamically render a web page and add functionality to it by binding/handling various events.

Template/started code have been provided for you to help you get started. Opening up the `index.html` file in your browser should render the below page for you:

![assignment2_template.png](assets%2Fassignment2_template.png)

The goal of this assignment is to create a simple **Point of Sale** system/app. The left side/majority of the page will consist of the "inventory" section, where a waiter can click on a particular menu item to add to the order. The right side of the page will consist of 1) a list of items currently added to the order, and 2) a grand total of all the added items at the bottom.

The provided starter code simply just renders a few items, and adds a static item to the order list. It will be up to you to write Javascript code to add all the items that are provided to you in this assignment, along with adding functionality to the page such as adding/removing items from the order list and tallying the total price. See requirements/instructions below.

## Restriction

As part of this assignment, you are required to follow the below few restrictions

- You are allowed to **ONLY** modify the provided `index.js` file`.
- You are **NOT** allowed to add any additional files or pull in any Javascript libraries.
- You may study & modify the other files in this assignment just for testing/debugging purpose, but you must revert them to their original state before submitting.
- Grading will be done solely on your `index.js` file submission, tested against the original provided started/template code.

## Requirements/Goals

These are your main goals/requirements, you should write your Javascript code in `index.js` to achieve these goals & requirements! Grading %'s are listed next to each of the requirements.

### 1) Rendering the inventory/menu (20%)

- You should render all the menu items that are provided as part of this project.
- The menu item details can be found in the `POS_DATA` object, located at the top of the `index.js` file.
  - There are a total of `12` food items.
  - There are a total of `8` drink items.
  - There are a total of `4` dessert items.
- The images for all these items are all provided for you in the `assets` folder.
- Each menu item should be rendered in the same way as the starter code (containing the item image, name and price).
- CSS should already be set for you, but you are welcomed to override the default provided CSS values using Javascript.

### 2) Inventory/menu item functionality (30%)

- Once all the menu items are rendered as part of 1) above, you are to add click functionalities to each of these items.
- Clicking on a particular item on in the inventory should have the following effects:
  - The item should be added to the order list (see order list requirements below).
  - The item's price should be tallied to the total amount and displayed in the total price bar below the order list (see total price bar requirements below).
- Items can be clicked on multiple times, with each click adding an order of the item to the order list.

### 3) Order list (30%)

- The order list initially has a dummy entry that has been provided for you as part of the starter code.
  - For your submission/assignment, this order list should initially start out as an empty list.
- Clicking on an item as part of the functionality for 2) above, should add the item to this order list.
- Each of the order list item entries should contain the name of the item, the price, and a `"X" button` element.
- Clicking on the `"X" button` should remove the particular item from the order list.
- There is no limit to how many items can be on the order list. You can assume a reasonable number of items that can be ordered by customers in a single sitting at a restaurant.
- CSS for this list should already be taken care of, but similar to the inventory/menu, you're welcomed to override the default CSS using Javascript.

### 4) Total bar (20%)

- Right below the order list section on the right is the order total bar.
- This bar should display the total of all the items currently in the order list.
- Adding/removing items should automatically update the total and have it reflect/updated/rendered right away.

## Hints/Suggestions

Just some hints/suggestions to guide and help you get started with this assignment! This is not the only way to go about tackling this assigment, so feel free to deviate from these hints/plan.

1) First try and read the starter code and understand how some of the items are being rendered. Also look at the JS file and study the `POS_DATA` object to see what data you're working with.
2) You should first try and work on clearing the inventory/order list section so that you can start with a fresh empty state to figure out how you would want to render items in it, without having to deal with the existing started code examples.
3) Once you are able to properly render items in the inventory/order list using your JS code, you should then work on adding functionality to the items. Consider the following functionalities:
   - What happens when you click on a menu item in the inventory?
   - What happens when you remove an item from the order list?
   - When does the total cost need to get updated?
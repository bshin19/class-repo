# ES6travaganza

## Class Objectives
+ ES6 Concepts
+ Babel and transpiling
+ Import syntax
+ Arrow Functions
+ Classes, constructors, and class methods
+ let, const, and block scope
+ Template literals
+ Additional string and array methods

## ES6
The 6th version of javascript

+ array.pop() removes the last element

+ Remember: let and const both have the same scoping, so a constant variable that is only used once in a function should still be a let.

## Template literals

+ `did ${classmate} eat`

This takes the above string and adds the template literal directly into it via the ${variablename} syntax to eliminate the complicated " this is a string " + variable + "end string."

+ return is treated as a return in template literals

## Basic String MEthods:

+ startsWith, endsWith, and includes

console.log(`Fifteen is ${a + b} and ${a - b} is 5`);
ex: console.log(str.startsWith("Are",0));

## Hoisting
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

A variable created in a function without a declaration is hoisted to global:

> function hoist() {
> a = 20; // this is hoisted to the global scale
> var b = 200; // this is declared in the function hoist so is limited in scope to the hoist function
> }

## ES6 Arrray methods
array.filter(

array.reduce(
takes an array of number and does whatever we want with them

map:
menuitems = menu.map((menuitem) => {return menuitem.item}) // goes through the entire array and grabs all objects' item values. They are placed in the menuitems variable as a new array.
console.log(menuitems)

forEach:
menu.forEach(function(menu) { //big arrow can be used instead of function(menu). 
console.log(`The ${menu.item} has ${menu.calories} calories`);

> Goes through the entire array in just a 

## Arrows
+ parameters passed into es6 as the singular variable don't need the parenthesis.
  * Parameters still need parenthesis as 0 or 2+ variables
+ Brackets can be ignored and return can be removed if simple statement function.
  * Ex) const square = (a, b) => a * b // returns a * b (variables that have been passed into the function multiplied together)
  
## Destructuring and new object notation
+ var animal = { name: "hi", type: "bad cat"};

es6 destructuring: var {animal, type} = animal;

+ animals = [...animals, "Lion];
+ var [first (index 0), second (index 1), ...others (index 2+)] = animals (all data pulled from array animals)

## Babel

Babel converts ES6 into ES5.
+ this conversion is necessary for full compatability and tree shaking.
+ Tree shaking is important when getting into react.

> babel-node examplefile.js

## React Notes:
+ Multiple JSZ elements should be contained within a single parent element
+ Void elements such as input tags, are represented by JSX tags with a self-closing forward slash <input />
+ React library must be imported anywhere that jsx is used.

+ import "../csslink"

In react, inline styles are created as objects and referenced with their properties.
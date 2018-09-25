# React.JS

## Itinerary
* ES6 review
* React
* Demo create react app
* Hello World Examples
* JSX Variables
* CSS Demo/Style Prop

## React
+ Javascript library created by facebook
+ Front-end elements are fully-contained UI elements
+ Allows to decompose a UI into different parts.
+ Easier to test

In Jquery, applications state and UI are updated independently of each other. Code becomes a series of erratic DOM manipulations

In React, we never update the DOM ourselves, instead, the application does so.
React's virtual DOM skips unnecessary trips to the DOM.

### Virtual DOM
+ Is a JavaScript Object that models the real DOM. The virtual DOM recieves the UI updates first, then compares to the DOM. React compares these and updates the least amount of parts necessary.

### React Quiz
1. In the previous section we just installed two packages, Create React App and Yarn. What are they for?
Quickly Create React Apps without configuration.
Yarn is a package manager like NPM.

2. What are some benefits of using ReactJS?
Updates via the virtual DOM instead of the DOM, allowing pages with rapid-changing data to move faster.
All components can be created, tested, etc separately.

3. What is a React component? Hint: Check the “Components and Props” section of the React documentation.
Components are reusable elements that accept props (properties) and return what should appear on the page.

4. What is the significance of the `ReactDOM.render` method? Hint: Check the “ReactDOM” section of the documentation.
Render a react element into the dom in the supplied container and return a reference to the components.

5. What is JSX? Why does Facebook recommend using it? Hint: Check the “Introducing JSX” section of the documentation.
Javascript Syntax Extension. Literal-like variable insertion and combines all markup into an easily readable schema.
JSX uses camelcasing for html things.

6. What does Facebook recommend as the “best way to start building a new React single page application”? Hint: Check the “Installation” section of the React documentation.
Create a new simple react app with create react app.

7. What is Babel? And what role does it play in converting JSX into vanilla JavaScript? Hint: Check the “Introducing JSX” section of the documentation.
Babel converts es6 js to es5. Babel reduces react jsx down to React.createElement() calls. Bundles modules.

8. What is the significance of { } curly braces in JSX? Hint: Check the “Introducing JSX” section of the documentation.
Signify a variable or any javascript expression.

9. What is a component prop? Hint: Check the “Components and Props” section of the React documentation.
Prop is a user-defined object that the component can use for rendering.

## 

* Square brackets treat react components as an array

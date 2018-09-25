# React

## Recap
+ Components are one of the integral pieces of React.
+ Components are reusable
+ JSX is the HTML-like markup text. A javascript extension.
+ Under the hood, jsx renders javascript under the hood--It is **NOT** html
+ class is reserved in js and is called className in jsx
+ JS variables can be input into jsx via {}. A value must be returned.

### Props
+ Props (properties) of components are properties passed into jsx components
+ Props are like function arguments that can be passed into components
+ Props can be passed to a component by attaching attributes to the JSX that renders the component.
+ Props should be considered immutable.

### ReactDom.render
+ Library separate from react.
+ Used for rendering.

## Prop Updating

> this.setState({ propName: this.state.propName howAdjusted
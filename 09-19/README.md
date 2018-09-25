# Mern

## Objectives
+ React Review
+ Fix Class React Pain pts
+ Using React App to connect to an Express backend
+ increase understanding and comfort using React router
+ Deploy to thicc
+ Intro to final project

## React Router
> import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

### Example of Router Implementation

Const App = () => {
	<Router>
		<div>
			<Nav />
			<Switch>
				<Route exact path=“/“ component={Books} />
				<Route exact path=“/books” component={Books} />
				<Route exact path=“/books/:id” component={Book} />
				<Route component={NoMatch} />
			</Switch>
		</div>
	</Router>
);
Export default App

### Example of Mounting w/ Router

this.props.match.params.id
componentDidMount() {
	API.getBook(this.props.match.params.id)
		.then(res => this.SetState({ book: res.data }))
		.catch(err => console.log(err))
}
render() {
… }
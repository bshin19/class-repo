// ### 11. Partners Do: Ben and Jerry's App

//  * In this activity, you are going to be creating your own Ben and Jerry's App where users can see all of the different flavors 
//    Ben and Jerry's have to offer while also getting specific information on a flavor by searching for it within the URL.

// * Do not use MySQL for this assignment! Use the `icecreams` variable above as your data. Add the variable to your `server.js` file.

//  * Using handlebars and express, create a route called `/icecream/:name`. When the route is hit, it will display the name,
//  price and awesomeness for that specific ice cream.

//  * Create an `/icecreams` route. It will loop over all the ice creams and display them all to the user.

// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var icecreams = [
  { name: 'vanilla', price: 10, awesomeness: 3 },
  { name: 'chocolate', price: 4, awesomeness: 8 },
  { name: 'banana', price: 1, awesomeness: 1 },
  { name: 'greentea', price: 5, awesomeness: 7 },
  { name: 'jawbreakers', price: 6, awesomeness: 2 },
];

// Routes
app.get("/icecreams/:name", function (req, res) {
  console.log(req.params)
  var icecream = req.params.name;
  
  for (var i = 0; i < icecreams.length; i++) {
    if (icecream === icecreams[i].name) {
      res.render("index", icecreams[i]);
      // res.render("index", icecreams[i].name);
      // res.render("index", icecreams[i].price);
      // res.render("index", icecreams[i].awesomeness);
    }
  }
});

app.get("/icecreams", function (req, res) {
  // for (var i = 0; i < icecreams.length; i++) {
  //   if (icecream === icecreams[i].name) {
  //     res.render("index", icecreams[i].name);
  //     res.render("index", icecreams[i].price);
  //     res.render("index", icecreams[i].awesomeness);
  //   }
  // }
  res.render("all-icecreams", {
    icecreams: icecreams,
    eater: "Brady"
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

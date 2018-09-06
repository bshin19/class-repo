// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

//call sequelize???

//call database

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  
  app.get("/api/all"), function(req, res) {
    db.findAll({}).then(function(results) {
      console.log(res.json(results))
    });
  };

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", function(req, res) {
    console.log(req.body);
    db.create({

    }, function(results) {
      res.json(results);
    });
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    orm.deleteTodo(req.params.id, function(results) {
      res.json(results);
    });
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", function(req, res) {
    orm.editTodo(req.body, function(results) {
      res.json(results);
    });
  });
};

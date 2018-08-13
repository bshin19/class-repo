/// GLOBAL VARIABLES ///
var express = require("express");
var exphbs = require("express-handlebars");
var app = express();

var bodyParser = require("body-parser");
var mysql = require("mysql");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "day_planner_db"
});

/// END GLOBAL VARIABLES ///

/// SERVER CONNECTIONS ///

// Connect to the SQL server
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

/// END SERVER CONNECTIONS ///

/// ROUTE LISTENERS ///

// Use Handlebars to render the main index.html page with the todos in it.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM plans;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { plans: data });
  });
});

// CREATE
app.post("/todos", function(req, res) {
  connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan], function(err, result) {
    if (err) {
      return res.status(500).end();
    }

    // Send back the ID of the new todo
    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });
});

// GET/RETRIEVE
app.get("/todos", function(req, res) {
  connection.query("SELECT * FROM plans;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.json(data);
  });
});

// UPDATE
app.put("/todos/:id", function(req, res) {
  connection.query("UPDATE plans SET plan = ? WHERE id = ?", [req.body.plan, req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

  });
});

// DELETE
app.delete("/todos/:id", function(req, res) {
  connection.query("DELETE FROM plans WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

  });
});

/// END ROUTE LISTENERS ///

/// END ///
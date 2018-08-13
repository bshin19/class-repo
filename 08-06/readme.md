# 08-06 THE POWER OF THE ORM

## Objectives

+ Node Static Module
+ Create, change, and use a basic ORM to perform CRUD commands on a local mySQL databaseto reduce manual db queries.

## Warm up

Define:
+ Routes - url path using request methods
+ Handlebars - html template and variable serving
  * Two handlebars vs three handlebars: Two is HTML-escaped (ideal for strings), three is full html
+ Bodyparser - NPM module 
+ Template Engine - Handlebars is a template engine. There are others like PUG.
+ Static File - css, client-side javascript, images. 

## Static Module
+ Using express.js and node-static module, you can serve static resources like images, css, JS or other static files.

ex) app.use(express.static("public"));

## ORM
Object Relational Mapper \
Java App -> Object -> ORM -> Database \

Sequel -> ORM -> Sequelize
when requiring files, add ./ or node will think the path is for a node module. \

node: ?? means column when selecting from a db.

## MVC
Model -> View -> Controller -> Model Triangle
Model updates view, view takes user input to controller, controller modifies the model

View is the user interface. What is being **displayed** to the **user**.
Controller is the routes. Handles where the user information goes.
Model is the database. 

## Handlebars if / unless
{{if}} if.
{{unless}} basically if not.
# 08/08 Notes THE SEQUEL TO MYSQL

## MVC

+ Anything being delivered to the client is part of the **view**.
+ Anything that's interfacing with the model is part of the controller.
+ Database, orm, and connection are part of the model

## Chirpy

## Sequelize
+ What is sequelize?
  * Sequelize is an ORM promise-based node module.
+ What advantages does it offer?
  * Easy to test.
  * Gives support for syncing databases.
  * Validation, restricts to specific form of data.
  * Complex Queries in simple syntax.
  * Compatability with all versions of SQL.
  * Model for schema.
+ How do I install it? How do I incorporate it into my app
  * Through NPM (Node package manager).
  * $ npm install --save sequelize
  * $ npm install --save mysql2
+ What the heck is a Sequelize model? What role will it play?
  * A sequelize model appears to basically be a schema.
  * Has ORM 
+ How would you model country, phonecode, capital, and independenceyear

+ How would I query for all the records where the independence year was less than 50 years ago?

+ How would I query the table, order it by desceneing Independence years=, and limit the results to show 2 of the records. Skipping the first two? (i.e. results: zambia, afghanistan

## CRUD methods in Sequelize
+ findOne: finds a single record from a table
+ findAll: finds all records from a table
+ create: creates a new record in a table
+ update: updates a record or records in a table
+ destroy: deletes a record or records from a table

## ORM Benefits
Decoupling from specific codebases and enabling application flexibility. \
Making application more abstract.

CaminteJS is an example of a very flexible ORM.

## Sequelize CLI

+ CREATE DATABASE 'database_development';
+ **SequelizeQuickStartGuide.PDF** and **Sequelize CLI Skeleton**;
+ Update Package.json to include additional dependencies
+ Run npm install;
+ Run 'sequelize init:config & sequelize init:models'
+ Create user.js Model in model folder
+ Add db require and 'db.sequelize.sync().then...' code to server 
+ Run server.js
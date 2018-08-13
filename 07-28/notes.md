# NOTES 07/28 Express Yourself

## Difference between Express.js and typical routing?
!Important \

## Goals:
+ Know how to create a generic Express server
+ Know how to create a basic Express GET route
+ Know how to create an Express POST route
+ Know what Postman is for
+ Conceptually understand how this all works.

## Empty box
How does an empty box represent a server?
+ Servers can be represented as hardware boxes with modules of server-side code contained inside
+ Servers typically contain code for tasks such as listening, partsing urls, route handling, and more

## What Is **Express**?
+ A fast, uhopinionated minimalist web framework for node.js
  * Unopinionated means doesn't follow a strict schema.
+ Makes creating a framework for servers much simpler.

## What is a **Route**?
Routes = Maps. \
+ / = user is shown the "Home" page.
+ /saved = user is shown the "Saved" page.
+ /api/headlines = user is given JSON containing all of the headline data.

When the user visits a root, it's a server GET request.

## Difference between GET and POST
A get expects somethng back from the server. \
A post expects to get something from the user to return to the server. \

## Express parameters
+ Optional routes can be set and variable routes can be set.
  * Optional: /var?
  * Variable: /:var
  

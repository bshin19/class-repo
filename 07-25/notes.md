# 07/25 NOTES
## Server Side!
Console.table displays arrays. Useful for bamazon.

## Today's Goals:
+ Gain a conceptual understanding of server-side code.
+ Learn the fundamentals of building a server using plain Node.js to listen and respond to client-side requests.

## Node + Express Servers and Routing
Some of the most **important concepts** in the entire course.

## What is a Server:
The machine and code taht handles requests and responds to them.

## Examples of Server side functions:
** + Visiting a URL and landing on an HTML page
+ Visiting an API end-point. **
+ Clicking an invoice that provides a PDF report
+ Image processing software that takes an image, applies a filter, then saves the new version.
+ Google searching.

## What is a client?
+ The user's personal machine that makes requests of the server.

Clients and servers communicate back and forth using a series of understood communications defined by HTTP/ HTTPs.

## Building a server
+ For our purposes, creating a server equates to writing the code that handles what the server will ** do **.
+ The code you create handles listeners
  * 
+ Parse URL
  * 
+ Route Handling
  * Route or direct the flow of traffic based on URL keywords.
+ Send HTML
+ Send JSON
+ Receive POSTs
+ Server Side Logic

## URL Parsing and Routing
+ writeHead(val, {"Content-Type": "text/html" });
  * Sets the html response info. Can set as 200, 401, etc.
+ fs.readFile(__dirname uses the same path as the directory where the script is stored
+ ./ is where the app is started from.

## 
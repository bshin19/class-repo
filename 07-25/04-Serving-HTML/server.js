// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

  var path = req.url;

  switch (path) {
    case "/":

      // Here we use the fs package to read our index.html file
      showFile("/index.html", req, res);
      break;
    case "/the":
      showFile("/the.html", req, res);
      break;
    case "/what":
      showFile("/what.html", req, res);
      break;
    case "/heck":
      showFile("/heck.html", req, res);
      break;
  };
}

function showFile(path, req, res) {
  console.log(path);
  fs.readFile(__dirname + path, function (err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}


// Starts our server
server.listen(PORT, function () {
  console.log("Server is listening on PORT: " + PORT);
});

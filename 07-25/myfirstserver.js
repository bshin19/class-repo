var http = require("http");

var PORT = 8080;

function handleRequest(request, response) {
    response.end("It works! " + request.url);
};

// createServer http function on the handlerequest function
var server = http.createServer(handleRequest);

server.listen (PORT, function() {
    console.log("Server is listening on http://localhost: " + PORT);
});
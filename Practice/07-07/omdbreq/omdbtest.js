// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...
var request = require('request');


// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = process.argv[2];

for (var i = 2; i < process.argv.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        moveiName = movieName 
    } else {
        movieName += nodeArgs[i];
    }
}

movieName = movieName.replace(" ", "+");
console.log(movieName)

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

// Then create a request to the queryUrl
request(queryUrl, function(error, response, data) {

    if (!error && response.statusCode === 200) {
        console.log(data);
        console.log(JSON.parse(data).Year)
    };
});
// ...

// If the request is successful

// ...

// Then log the Release Year for the movie
// ...

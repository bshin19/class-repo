//Install the `request` package by running `npm install request` in your terminal. 
//We will use the `request` module to make AJAX requests to the TV Maze API. 
//Require the `request` package and the built-in `fs` package at the top of the `tv.js` file.
var request = require('request');

var TV = function() {
  this.findShow = function(show) {
    //* Inside of the `TV` constructor function's `findShow` method, use the `request` package to 
    //hit the TV Maze API for the `URL` string. 
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    request(URL, function(error, response, body) {
      if (!error && response.statusCode === 200) {
          
        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        var mov = JSON.parse(body);

          // * Title of the movie.
          console.log(mov.Title);
          // * Year the movie came out.
          console.log("Release Year: " + mov.Year);
          // * IMDB Rating of the movie.
          console.log("IMDB's rating: " + mov.imdbRating);
          // * Rotten Tomatoes Rating of the movie.
          console.log("Rotten Tomatoes' Rating: " + mov.Ratings[0].Value);
          // * Country where the movie was produced.
          console.log("Proudly produced in the " + mov.Country);
          // * Language of the movie.
          console.log("Available in these languages: " + mov.Language);
          // * Plot of the movie.
          console.log(mov.Plot);
          // * Actors in the movie.
          console.log(mov.Actors);

      };
    });

  };
};

module.exports = TV;

// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var weather = require("weather-js");
var geocode = require("geocoder");
var inquirer = require("inquirer")
var location = "";

inquirer.prompt([
    {
        type: "input",
        message: "Where do you want to know stuff about?",
        name: "location"
      }
])
.then(function(inquirerResponse) {
    console.log(inquirerResponse);
    location = inquirerResponse.location
    console.log(location);

    console.log(location)
// Build your address as an array or string
weather.find({
    search: location, degreeType: "F"
}, function (err, result) {

    if (err) {
        console.log(err);
    }

    console.log(JSON.stringify(result, null, 2));
})

geocode.geocode(location, function(err, data) {
    if (err) {
        console.log(err);
    }

    console.log(JSON.stringify(data, null, 2));
})
});

// Take in the command line arguments

// for (var i = 2; i < process.argv.length; i++) {
//     location += process.argv[i] + " ";
//     console.log(location);
// };




// Then use Geocoder NPM to geocode the address
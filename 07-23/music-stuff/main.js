var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "musictop"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    userInput();
})

function userInput() {
    inquirer.prompt([
        {
            type: "list",
            message: "What type of top 5000 search will you perform?",
            choices: ["Songs by Artist", "Popular top 5000 Artists", "Range search", "Song search"],
            name: "command"
        }
    ])
        .then(function (response) {
            console.log(response.command);
            switch (response.command) {
                case ("Songs by Artist"):
                console.log("got here")
                    artistSearch();
                    break;
                case ("Popular top 5000 Artists"):
                    break;
                case ("Range search"):
                    break;
                case ("Song search"):
                    break;
            };
        });
};

//Query returns all songs by artist
function artistSearch() {
    // Here we create a basic text prompt.
    inquirer.prompt([
        {
            type: "input",
            message: "What artist would you like to search?",
            name: "artist"
        }
    ])
    //The table listed here must use the name from the mysql database instead of the reference name created in javascript.
        .then(function(response) {
            connection.query("SELECT * FROM topsongs WHERE artist=?", [response.artist], function (err, result, fields) {
                if (err) throw err;
                console.log(result);
            });
        });
};

  //Query returns all artists who appear in top 5000 > 1

  //Query returns all data within a range

  //Query searches for specific song in the top 5000 and returns the data
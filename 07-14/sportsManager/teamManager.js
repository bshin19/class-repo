// Instructions
var inquirer = require("inquirer");
// Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

// Start out by creating a constructor function called “Player” with the following properties and methods...

function Player(name, position, offense, defense) {
    // name: Property which contains the player’s name
    this.name = name;
    // position: Property which holds the player’s position
    this.position = position;
    // offense: Property which is a value between 1 and 10 to show how good this player is on offense
    this.offense = offense;
    // defense: Property which is a value between 1 and 10 to show how good this player is on defense
    this.defense = defense;
// goodGame: Method which increases either the player’s offense or defense property based upon a coinflip.
    this.goodGame = function() {
        var coinflip = Math.floor(Math.random() * Math.floor(2))
        if(coinflip === 1){
            this.offense++
        }
        else{
            this.defense++
        }

    }
// badGame: Method which decreases either the player’s offense or defense property based upon a coinflip.
    this.badGame = function() {
        var coinflip = Math.floor(Math.random() * Math.floor(2))
        if(coinflip === 1){
            this.offense--
        }
        else{
            this.defense--
        }

    }
// printStats: Method which prints all of the player’s properties to the screen
    this.printStats = function() {
        console.log(JSON.stringify(this))
    }
  }

var Brady = new Player("Brady", 'Forward', 5, 5) 

Brady.printStats()


var starters = [];
var subs = [];
var team = [];
var positions = ["forward", "back", "striker", "goalkeeper", "goalie"]



// Now create a program which allows the user to create 3 unique players; 2 starters and a sub. It should take as user input the name, position, offense, and defense of each player.

var createPlayer = function() {
    // if the length of the team array is 5 or higher, no more questions will be asked
    if (starters.length + subs.length < 5) {
      console.log("\nNEW PLAYER!\n");
//inArray(where, stateArr)
      inquirer.prompt([
        {
          name: "name",
          message: "Player's Name: "
        }, {
          name: "position",
          message: "Player's position: ",
          validate: function(value){

              if(positions.includes(value.toLowerCase())){
                  return true
              }
              else{
                  return false
              }
          }
        }, {
          name: "offense",
          message: "Player's Offensive Ability: ",
          //valide is set to javascript object which is a function, it looks at the value that is passed
          validate: function(value) {

            if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
              return true;
            }
            return false;
          }
        }, {
          name: "defense",
          message: "Player's Defensive Ability: ",
          validate: function(value) {
            if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
              return true;
            }
            return false;
          }
        }
      ]).then(function(answers) {
        // runs the constructor and places the new player object into the variable player.
        // turns the offense and defense variables into integers as well with parseInt
        var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
        // adds a player to the starters array if there are less than five player objects in it.
        // otherwise adds the newest player object to the subs array
        if (starters.length < 3) {
          starters.push(player);
          team.push(player);
          console.log(player.name + " added to the starters");
        }
        else {
          subs.push(player);
          team.push(player);
          console.log(player.name + " added to the subs");
        }
        // runs the createPlayer function once more
        createPlayer();
      });
    }
    else {
      // loops through the team array and calls printStats() for each object it contains
      for (var i = 0; i < team.length; i++) {
        team[i].printStats();
      }
    }
  };
  
  // calls the function createPlayer() to start the code
  createPlayer();


// Once all of the players have been created, print their stats.

// HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.



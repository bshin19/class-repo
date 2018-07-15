// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

var inquirer = require('inquirer')

var password = "hello";

inquirer.prompt([
    {
        type: "input",
        message: "How cool are you?",
        name: "usercool"
    },
    {
        type: "password",
        message: "Give me your password.",
        name: "password"
    },
    {
        type: "list",
        message: "How much more attractive am I than you?",
        choices: ["Tremendously", "Absurdly", "Ridiculously", "Massively"],
        name: "attract"
    },
    {
        type: "checkbox",
        message: "Select whether you are not attractive or ugly",
        name: "attrbox",
        choices: ["Not Attractive", "Ugly"]
    },
    {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true
    }
])
.then(function(inquirerResponse) {
    if (inquirerResponse.confirm) {
        console.log("\nWelcome " + inquirerResponse.username);
        console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
      }
      else {
        console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
      };
});

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

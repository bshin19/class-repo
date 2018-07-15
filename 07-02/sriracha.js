/// PRACTICE 1 - Open with node using the command line ///
console.log("Sriracha. Goes great on everything")

/// PRACTICE 2 - Compare argument 3 and 4 provided and whether they are equal ///
var firstNumber = process.argv[2];
var secondNumber = process.argv[3];
if (secondNumber === firstNumber) {
    console.log(firstNumber + " and " + secondNumber + " are equal")
} else if (secondNumber < firstNumber) {
    console.log(firstNumber + " is less than " + secondNumber);
} else {
    console.log(secondNumber + " is greater than " + firstNumber);
};

/// PRACTICE 2 ALT - using one line ///
console.log(process.argv[2] & process.argv[3]);

/// PRACTICE 3 - MAKE A COMMAND-LINE CALCULATOR USING NODE.JS ///
/* node.js add = process.argv[2]
node.js "firstnum" = process.argv[3]
node.js "secondnum" = process.argv[4]
*/
var operator = process.argv[2];
var num1 = parseFloat(process.argv[3]);
var num2 = parseFloat(process.argv[4]);
var solution;

switch (operator) {
    case "add":
        solution = num1 + num2;
        break;
    case "subtract":
        solution = num1 - num2;
        break;
    case "multiply":
        solution = num1 * num2;
        break;
    case "divide":
        solution = num1 / num2;
        break;
    case "remainder":
        solution = num1 % num2;
        break;
    case "exp":
        solution = Math.pow(num1, num2);
        break;
    case "algebra":
        solution = eval(process.argv[3]);
};
console.log(solution);

/// PRACTICE 4 - USING COMMAND LINE, TAKE NUMBER AND ADD ALL MULTIPLES OF 6 SMALLER THAN NUM ///
//node.js number = process.argv[3]

//initial variables
var bigNum = parseFloat(process.argv[2]);
var littleNum = parseFloat(process.argv[3]);
var numCounter = 0;
var numSolution = 0;

//main looping math function
function loopNum() {
    while (bigNum > littleNum) {
        bigNum -= littleNum;
        numCounter++;
        numSolution += numCounter * littleNum;
    };
    console.log(numSolution);
};

//if user didn't submit a value, make value 6.
if (isNaN(littleNum)) {
    littleNum = 6;
    loopNum();
//if user did submit a value, run loopNum like normal
} else {
    loopNum();
};

/// PRACTICE 5 - ///
var bands = {
    rock: "Pink Floyd",
    rap: "BDP",
    polka: "Some Polka Band"
};

var badbands = {
    
}

module.exports = {
    bands: bands
}
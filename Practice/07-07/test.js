// var firstNumber = process.argv[2];
// var secondNumber = process.argv[3];

// function sevenMulti(number) {
//     if (number % 7 === 0) {
//         console.log(number + " is divisible by 7.")
//     } else {
//         console.log(number + " is NOT divisible by 7.")
//     };
// };

// function testNumbers() {
//     if (secondNumber === firstNumber) {
//         console.log(firstNumber + " and " + secondNumber + " are equal")
//     } else if (secondNumber < firstNumber) {
//         console.log(firstNumber + " is less than " + secondNumber);
//     } else {
//         console.log(secondNumber + " is greater than " + firstNumber);
//     };
// };

// testNumbers();
// sevenMulti(firstNumber);
// sevenMulti(secondNumber);

/// Practice 2 - Best Things Ever ///
var fs = require('fs');
fs.readFile("best_things_ever.txt", 'utf8', function(err,data) {
    if (err) {
        console.log(err);
    };
    console.log(data);
    var dataSplit = data.split(", ")
    console.log(dataSplit);
    for (var i = 0; i < dataSplit.length; i++) {
        console.log(dataSplit[i]);
    };
});
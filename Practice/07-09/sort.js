// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

//Using for loops

var numberList = [];

//Loop through inputs from third index in argv array & add to list
for (var i = 2; i < process.argv.length; i++) {
    numberList.push(process.argv[i]);
};

//sort through list by comparing values and return them in numerical order
numberList.sort(function(a,b) {
    return (a-b);
});

//run through sorted number list and display numbers in numerical order
for (var i = 0; i < numberList.length; i++) {
    console.log(numberList[i]);
};

//Using forEach loops

var numberList2 = [];

process.argv.forEach(function (value, index) {
    numberList2.push(value);
});

numberList2.sort(function(a,b) {
    return (a-b);
});

numberList2.forEach(function(value, index) {
    console.log(value);
});
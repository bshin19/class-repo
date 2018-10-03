var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];

var random_value = stuff[ Math.floor( Math.random() * 14 ) ]

for (let i of stuff) {
    if (stuff[i] === random_value) {
        return console.log("Hello. The index of the array was " + i + ", the value is " + random_value);
        // break;
    };
};
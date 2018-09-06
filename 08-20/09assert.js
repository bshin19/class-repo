try {
  var assertThrows = function(func, x, y) {
    var threw = func(x, y);
    console.log(threw);

    // Depending on whether an error was thrown, threw is either true or false
    if (typeof(threw) != "number") {
      threw = true;
      return threw;
    };
  };
} catch(err) {
  console.log("error thrown is " + threw);
};

var multiply = function(x, y) {
  // use 'typeof' keyword to check if both x and y are numbers:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  if (typeof(x) && typeof(y) != "number") {
    throw ("No numbers provided");
  }
  else return x * y;
};

assertThrows(multiply, 12, "three");
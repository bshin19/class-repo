log(name); // guess: undefined

var tinyize = function(name) {
  log(name); // guess: passed in variable (name)

  log(myName); // guess: undefined
  var myName = "Tiny " + name + "!";
  log(myName); // guess: Tiny + passed in variable (name) + !

  return myName;
};

var name = tinyize("Rick");
log(name); // guess: rick
//log(myName); // undefined

log(i); // undefined
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // guess: i in loop
  }, 100);
}
log(i); // guess: undefined

// helper function to log current line number and the passed in string
// e.g. "Line 24: Hello World"
function log(string) {
  var callerLine = new Error().stack.split("\n")[2];
  var lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}

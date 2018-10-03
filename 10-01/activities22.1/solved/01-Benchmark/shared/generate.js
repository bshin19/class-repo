// Create an array of length "length" filled with pseudo-random values
function generate(length) {

  var arr = [];
  var lastval = 0;

  for (var i = 0; i < length; i += 1) {
  	tempVal = Math.ceil(Math.random() * length) + lastval;
    arr.push(tempVal);
    lastval = tempVal;
  }
  return arr;
}

module.exports = generate;

var expect = require("chai").expect;
var squareRoot = require(“../squareroot");
// Lets say squareRoot just returns the square root of a number

describe(“Get Square Root", function() {
it("should return the square root of 16", function() {
    let result = squareRoot(16);
    expect(result).to.equal(4);
});
it("should return the square root of 9", function() {
    let result = squareRoot(9);
    expect(result).to.equal(2);
});
});



var expect = require("chai").expect;
var calculateTax = require("../tax");

// Write tests for the calculateTax function here

describe("Get Your Taxes", function() {
it("Should return the number with taxes factored in", function() {
    let result = calculateTax(10);
    expect(result).to.equal(10.80);
});
it("should return a post-tax value of 1.08", function() {
    let result = calculateTax(1);
    expect(result).to.equal(1.8);
});
});
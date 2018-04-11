const assert = require("assert");
const makeGreeting = require("./index").makeGreeting;

assert.equal(makeGreeting(), "Hello world!");
assert.equal(makeGreeting("Ben"), "Hello Ben!");
console.log("Success");

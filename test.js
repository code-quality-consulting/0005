const assert = require("assert");
function makeGreeting () {
    return "Hello world!";
}

assert.equal(makeGreeting(), "Hello world!");
assert.equal(makeGreeting("Ben"), "Hello Ben!");
console.log("Success");

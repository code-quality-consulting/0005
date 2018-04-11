const assert = require("assert");
function makeGreeting () {
    return "Hello world!";
}

assert.equal(makeGreeting(), "Hello world!");
console.log("Success");

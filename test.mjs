import assert from "assert";
import {makeGreeting} from "./index";

assert.equal(makeGreeting(), "Hello world!");
assert.equal(makeGreeting("Ben"), "Hello Ben!");
console.log("Success");

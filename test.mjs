import assert from "assert";
import {makeGreeting} from "./index";

assert.equal(makeGreeting(), "Hello world!");
assert.equal(makeGreeting("Ben"), "Hello Ben!");
assert.equal(makeGreeting("", "Spanish"), "\u00a1Hola mundo!");
console.log("Success");
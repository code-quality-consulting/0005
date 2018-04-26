/*jslint
    es6, node
*/
import assert from "assert";
import {makeGreeting} from "./index";
import {makeGreeter} from "./index";

const makeEnglishGreeting = makeGreeter("English");
const makeSpanishGreeting = makeGreeter("Spanish");

assert.equal(makeEnglishGreeting(), "Hello world!");
assert.equal(makeEnglishGreeting("Ben"), "Hello Ben!");
assert.equal(makeSpanishGreeting(), "\u00a1Hola mundo!");
console.log("Success");

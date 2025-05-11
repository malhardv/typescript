"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// STRING
var greetings = "My name is Malhar!";
// console.log(greetings.);   ------> only function that can be applied on string will be shown up
// NUMBER
var userId = 334455;
// can also be written as --> let userId = 334455 -----> typescrupt automatically infers what type of data is in the variable
// userId. -----> only function that can be applied on number will be shown up
// BOOLEAN
var isLoggedIn = false;
// isLoggedIn.  ----> only function that can be applied on bool will be shown up
// ANY KEYWORD
var hero;
// hover over "hero". typescript makes the type "any", whenever the variable is not defined with any value.
function getHero() {
    return "hulk";
}
hero = getHero();

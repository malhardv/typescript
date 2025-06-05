"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello" -------------> will giv error
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
var myVal = addTwo(5);
var upperVal = getUpper("Malhar");
// let upperVal = getUpper(5);  --> gives error as argument type is string and i am passing number here
signUpUser("Malhar", "malhar@vhatkar.com", true);
loginUser("Malhar", "malhar@malhar.com");
// using return type in arrow functions
var getUser = function (s) {
    return "s";
};
var heroes = ["thor", "spiderman", "ironman", "superman"];
var heroNumbers = [1, 2, 3];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
heroNumbers.map(function (num) {
    return "hero number is ".concat(num);
});
function consoleError(errorMessage) {
    console.log(errorMessage);
}
function handleError(errorMessage) {
    throw new Error(errorMessage);
}

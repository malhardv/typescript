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

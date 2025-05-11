"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    num.toLowerCase(); // -- ye kaise possible hai? number ko lower case???? (because it is assigned any)
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    // one default value set in the function itself, only 2 arguments( name and email ) can be sent too.
};
addTwo(5); // num pe hover kar - "any" dikhega -- bad sign
getUpper(4); // ---> par function mein toh string jaana chahiye?
signUp("Malhar", "malhar@vhatkar.com", false); // name email password mein number kaise chale gaye??  --- any type
loginUser("Malhar", "m@m.com");

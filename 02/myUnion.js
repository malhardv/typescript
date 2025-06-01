"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
var myUser = { name: "Malhar", id: 12345 };
myUser = { username: "malhardv", id: 12345 };
function newDB(id) {
    console.log("DB ID is ".concat(id));
    // id.toUpperCase();     // gives error because the union operator creates a new datatype that is the mixture of existing datatypes, so any function that is made for a particular datatype of which the union is made will not work and give error.
    if (typeof id === "string") {
        id.toUpperCase();
    }
    if (typeof id === "number") {
        id += 1;
        return id;
    }
}
newDB(12345);
newDB("12345"); // ACCEPTS BOTH THE STRINGS
// arrays --->
var data = [1, 2, 3, 4];
var data1 = ["1", "2", "3", "4"];
var data3 = []; // can be either string array only or number array only, array will not hold both string and number values
var data4 = [1, "2", true]; // now array can hold both string and number values
// example
var seatAllotment;
seatAllotment = "aisle"; // works fine

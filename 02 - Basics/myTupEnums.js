"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const user : (string | number)[] = [1, "mdv"]
var newuser;
// newuser = [true, "mdv", 45]    // wont work because the order should be the same too
newuser = ["mdv", 13, true]; //---> correct
var rgb;
rgb = [255, 255, 255];
var newUser = [34, "mdv@mdv.com"];
newUser[1] = "m@m.com"; // can be done if the datatype is the same
// since tuple is an array so we can use all the methods of the array
newUser.push(13);
console.log(newUser);   // gives output [ 34, 'm@m.com', 13 ]

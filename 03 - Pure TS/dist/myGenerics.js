"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function indentityTwo(val) {
    return val;
}
// the difference between the two is that i2 can take any value and return any value (string leke number bhi return kar sakta hai)
// whereas in i3, once input is taken in the "Type", it is locked and only that Type value will be returned. 
// (better than using any)
// GENERIC TYPE VARIABLES
function identityThree(val) {
    return val;
}
// both the functions are the same
function identityFour(val) {
    return val;
}
identityThree(3);
// identityFour<Bottle>({brand: "", type: 1})   // to pass an interface
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[3];
}
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[4];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, {
    connection: "asdfrtgrege",
    username: "sfjnwrgr",
    password: "lgkmerog"
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}

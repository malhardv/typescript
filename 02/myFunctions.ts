function addTwo(num : number) {
    num.toLowerCase(); // -- ye kaise possible hai? number ko lower case???? (because it is assigned any)
    return num + 2;
}

function getUpper(val) { // ---> firse any! chhi
    return val.toUpperCase();
}

function signUp( name: string, email: string, isPaid: boolean ) {

}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    // one default value set in the function itself, only 2 arguments( name and email ) can be sent too.
}

addTwo(5); // num pe hover kar - "any" dikhega -- bad sign
getUpper(4); // ---> par function mein toh string jaana chahiye?
signUp("Malhar", "malhar@vhatkar.com", false); // name email password mein number kaise chale gaye??  --- any type
loginUser("Malhar", "m@m.com")


export{}
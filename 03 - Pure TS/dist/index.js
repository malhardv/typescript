"use strict";
// private ----> can be accesed in the same class
// public ----> can be used everywhere
// protected ----> can be used in the same class and also in the inherited classes
// class User {
//     public email: string     // by default if not marked public --- then it is already public
//     private name: string
//     private readonly city: string = "Chandigarh"
//     constructor(email: string, name: string) {
//         this.email = email,
//         this.name = name
//     }
// }
class User {
    constructor(email, name, userId = "") {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1; //protected ---> can be used inside this class or inherited classes too, but not outside, (private + can be used in inherited)
    }
    deleteToken() {
        return `Token is deleted!`;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1.");
        }
        this._courseCount = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const malhar = new User("malhar@malhar.com", "Malhar");
console.log(malhar.getAppleEmail);
console.log(malhar.courseCount);
malhar.courseCount = 0;
console.log(malhar.courseCount);
// malhar.deleteToken();   // gives error because deleteToken() is a private method
// malhar.city = "Chandigarh"  // not allowed, readonly hai

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

    protected _courseCount = 1    //protected ---> can be used inside this class or inherited classes too, but not outside, (private + can be used in inherited)

    constructor(
        public email: string, 
        public name: string,
        private userId: string = ""
    ) {}

    private deleteToken(): string {
        return `Token is deleted!`
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNumber: number) {    // setters do not have a return type
        if(courseNumber <= 1) {
            throw new Error("Course count should be more than 1.")
        }
        this._courseCount = courseNumber
    }
}

class SubUser extends User {      // cannot inherit private members and methods
    isFamily: boolean = true
    changeCourseCount() {         // _courseCount can be changed because it is a protected member
        this._courseCount = 4
    }

}

const malhar = new User("malhar@malhar.com", "Malhar")
console.log(malhar.getAppleEmail)

console.log(malhar.courseCount)
malhar.courseCount = 0
console.log(malhar.courseCount);

// malhar.deleteToken();   // gives error because deleteToken() is a private method
// malhar.city = "Chandigarh"  // not allowed, readonly hai



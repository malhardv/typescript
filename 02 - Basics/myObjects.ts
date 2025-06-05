// const User = {
//     name: "Malhar",
//     email: "malhar.vhatkar@malhar.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {
    
// }

// let newObject = {
//     name: "Malhar",
//     isPaid: true,
//     email: "malhar.vhatkar@malhar.com"
// }
// createUser(newObject) // cannot directly pass more than specified argument in function ---->  create a new object, send the object as argument



// function createCourse():{name: string, price: number} {    // to return an object with required fields
//     return {
//         name: "Iphone 16",
//         price: 100000
//     }
// }

// using the "type"  --to create own datatype -->
type User = {
    name: string;
    email: string;
    isPaid: boolean;
}

function createUser(user: User): User {     // to pass the datatype of the string
    return {name:"Malhar", email: "malhar@malhar.com", isPaid: true}
}

createUser({name:"Malhar", email: "malhar@malhar.com", isPaid: true})

type newUser = {
    readonly _id: string;    // readonly - constructed type cannot be reassigned
    name: string
    email: string;
    isPaid: boolean;
    creditCardDetails?: number    // "?" means that the given field is optional
}   

let myUser: newUser = {
    _id: "12345",
    name: "Malhar",
    email: "malhar.vhatkar@malhar.com",
    isPaid: false,
}

// myUser._id = "12345"       // gives error as the id property is readonly

type cardNumber = {
    cardNumber: number
}

type cardDate = {
    carDate: string
}

type cardDetails = cardNumber & cardDate & {    // using the existing types to define a new type
    cvv: number
}

export{}
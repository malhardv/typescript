let score: number | string | boolean = 33

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let myUser: User | Admin = {name: "Malhar", id: 12345}

myUser = {username: "malhardv", id: 12345}

function newDB(id: number | string) {
    console.log(`DB ID is ${id}`)
    // id.toUpperCase();     // gives error because the union operator creates a new datatype that is the mixture of existing datatypes, so any function that is made for a particular datatype of which the union is made will not work and give error.
    if(typeof id === "string") {
        id.toUpperCase();
    }

    if(typeof id === "number") {
        id += 1;
        return id;
    }
}
newDB(12345)
newDB("12345")  // ACCEPTS BOTH THE STRINGS


// arrays --->
const data : number[] = [1, 2, 3, 4]
const data1 : string[] = ["1", "2", "3", "4"]
const data3 : string[] | number[] = []   // can be either string array only or number array only, array will not hold both string and number values
const data4 : (string | number | boolean)[] = [1, "2", true]   // now array can hold both string and number values

// example
let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"  // works fine
// seatAllotment = "crew" // will not work

export {}

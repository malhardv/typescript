function addTwo(num: number): number {
    return num + 2
    // return "hello" -------------> will giv error
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

let loginUser = (name: string, email: string, isPaid: boolean = true) => {

}

let myVal = addTwo(5);
let upperVal = getUpper("Malhar");
// let upperVal = getUpper(5);  --> gives error as argument type is string and i am passing number here

signUpUser("Malhar", "malhar@vhatkar.com", true)
loginUser("Malhar", "malhar@malhar.com")

// using return type in arrow functions
let getUser = (s: string) : string => {
    return "s";
}

const heroes = ["thor", "spiderman", "ironman", "superman"]
const heroNumbers = [1, 2, 3];

heroes.map(hero => {     // hover over the "hero" ---> tsc tells that it is a string type
    return `hero is ${hero}`
})

heroNumbers.map((num): string => {   // (num): number --> tells the return type of the map function
    return `hero number is ${num}`
})

function consoleError(errorMessage: string): void {  // good practise to mention the return type of the function 
    console.log(errorMessage)
}

function handleError(errorMessage: string): never {  // use never for functions that never complete and usually throw and error go in a loop
    throw new Error(errorMessage)
}

// void --- function completes execution but returns nothing
// never --- function never completes execution, either throws errors or just goes in a loop
//       --- return type never means that function throws expection or terminates the execution of program
export {}

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




export {}

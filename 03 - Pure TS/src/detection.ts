function detectType(val: number | string){
    if(typeof val === "number") {     // use typeof to check what type of variable is coming in as input --- also called typeguard
        return 5
    } 
    return val+3
}

function provideId(id: string | null) {
    if(!id) {
        console.log("Please Provide ID");
        return
    }
    id.toLowerCase()
}

function printAll(strs: string | string[] | null) {
    if(strs) {
        if(typeof strs === "object") {
            for(const s of strs) {
                console.log(s)
            }
        } else if (typeof strs === "string"){
            console.log(strs)
        }
    }
}

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function checkAdmin(account: User | Admin) {
    if("isAdmin" in account) {
        return account.isAdmin
    }
    return false
}

function logValue(x: Date | String) {
    if(x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

type Fish = {
    swim: () => void
}   

type Bird = {
    fly: () => void
}   

function isFish(pet: Fish | Bird): pet is Fish {    // if the condition inside is true then returns: type of pet is fish (defines the pet type)
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)){
        pet
        return "fish food"
    } else {
        pet
        return "bird food"
    }
}

interface Circle {    // discriminated unions
    kind: "circle",
    radius: number
}

interface Sqaure {
    kind : "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    breadth: number
}

type Shape = Circle | Sqaure | Rectangle

function getTrueShape(shape: Shape) {
    if(shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}

function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius**2

        case "square":
            return shape.side * shape.side

        case "rectangle":
            return shape.length * shape.breadth

        default:
            const _defaultForShape: never = shape             // check for exhaustive checking
            return _defaultForShape
    }
}
const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function indentityTwo(val: any) : any {
    return val
}
// the difference between the two is that i2 can take any value and return any value (string leke number bhi return kar sakta hai)
// whereas in i3, once input is taken in the "Type", it is locked and only that Type value will be returned. 
// (better than using any)
// GENERIC TYPE VARIABLES
function identityThree<Type>(val: Type): Type {
    return val;
}
// both the functions are the same
function identityFour<T>(val: T): T {
    return val
}
identityThree(3)


interface Bottle {
    brand: string,
    type: number
}

// identityFour<Bottle>({brand: "", type: 1})   // to pass an interface

function getSearchProducts<T> (products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[3]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {     // ---> <T,> comma is used just to indicate that the given tag is not a html/jsx tag, it is a generic variable
    // do some database operations
    const myIndex = 4
    return products[4]
}

interface Database {
    connection: string
    username: string
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, {
    connection: "asdfrtgrege",
    username: "sfjnwrgr",
    password: "lgkmerog"
})

interface Quiz {
    name: string
    type: String
}

interface Course {
    name: string
    author: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(products: T) {
        this.cart.push(products)
    }
}

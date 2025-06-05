// const user : (string | number)[] = [1, "mdv"]
let newuser: [string, number, boolean]
// newuser = [true, "mdv", 45]    // wont work because the order should be the same too
newuser = ["mdv", 13, true]   //---> correct

let rgb: [number, number, number]
rgb = [255, 255, 255]

// can define type using tuples
type User = [number, string]
const newUser : User = [34, "mdv@mdv.com"]
newUser[1] = "m@m.com"  // can be done if the datatype is the same

// since tuple is an array so we can use all the methods of the array
newUser.push(13) 
console.log(newUser)

export {}
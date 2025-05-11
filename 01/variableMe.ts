// STRING
let greetings: string = "My name is Malhar!";
// console.log(greetings.);   ------> only function that can be applied on string will be shown up

// NUMBER
let userId: number = 334455
// can also be written as --> let userId = 334455 -----> typescrupt automatically infers what type of data is in the variable
// userId. -----> only function that can be applied on number will be shown up

// BOOLEAN
let isLoggedIn: boolean = false
// isLoggedIn.  ----> only function that can be applied on bool will be shown up

// ANY KEYWORD
// any -> "my dear typescript, please turn off the type checking for this variable! (lmao)
// avoid using any
let hero;
// hover over "hero". typescript makes the type "any", whenever the variable is not defined with any value.
function getHero() {
    return "hulk";
}
hero = getHero()
export {}
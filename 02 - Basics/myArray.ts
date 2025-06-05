// const superHeros = []    // type never???   hover karke dekh
const superHeros: string[] = []
const heroPower: number[] = []
// const heroPower: Array<number> = []      // --------> can also be done in this way
type User = {
    name: string;
    isPaid: boolean;
}
const allUsers : User[] = []

const models: number[][] = [      //to define array in arrays
    [255, 255, 255]
] 

superHeros.push("SpiderMan");
heroPower.push(1);
allUsers.push({name: "Malhar", isPaid: false})

export {}


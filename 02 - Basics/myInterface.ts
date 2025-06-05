// type and interface are almost similar with almost same functionalities, but main difference between
// interface and type is : interface is mergeable

interface User {
    readonly dbID: number,  
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string,    // can be declared by the above method too, this one is easy to understand
    getCoupon(couponName: string, val: number): number
}

interface User {        // interfaces are mergeable
    githubToken: string
}

interface Admin extends User {    // we can do inheritance too
    role: "admin" | "ta" | "learner"
}

const malhar : Admin = {dbID: 112, email: "malhar.vhatkar@gmail.com", userId: 11, 
    startTrial: () => {
        return "trial started!"
    },
    getCoupon(couponName: "Malhar10", val: 10) {
        return 100;
    },
    githubToken: "3445345345wef",
    role: "learner"
}

export {}

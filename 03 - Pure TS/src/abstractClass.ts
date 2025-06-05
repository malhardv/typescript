abstract class PhotoTake {    // abstract ----> cannot be directly instantiated, needs to be inherited by other classes
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void      // abstract on method ---> i dont want to implement it here, but whenever inherited, the method should be defined there

    getReelTimeOut(): number {
        // some complext calculations
        return 8
    }
}

// const malhardv = new TakePhoto("test", "test")  // will give error as class in abstract

class Facebook extends PhotoTake {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)           // for inherited classes, write the requied parameters inside the super bracket
    }

    getSepia(): void {
        console.log('sepia');
    }
}

const facebookAccount = new Facebook("photo", "vivid", 3)

facebookAccount.getReelTimeOut()
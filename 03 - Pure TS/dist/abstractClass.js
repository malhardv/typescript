"use strict";
class PhotoTake {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTimeOut() {
        // some complext calculations
        return 8;
    }
}
// const malhardv = new TakePhoto("test", "test")  // will give error as class in abstract
class Facebook extends PhotoTake {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter); // for inherited classes, write the requied parameters inside the super bracket
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('sepia');
    }
}
const facebookAccount = new Facebook("photo", "vivid", 3);
facebookAccount.getReelTimeOut();

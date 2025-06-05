// how to restrict the users choice?
const enum SeatChoice {
    AISLE = 10,     // if number values are assigned, if value assigned 10 then the next ones will increase by 1, --> 11, 12, ...
    MIDDLE = 22,    // 22 --> 23, 24, ....
    WINDOW,
    FOURTH
}

const enum SeatChoiceCoded {
    AISLE = "aisle",      // if string value is assigned, values of all need to be assigned
    MIDDLE = "middle",
    WINDOW = "window",
    FOURTH = 4
}

const mySeat = SeatChoice.AISLE

export {}
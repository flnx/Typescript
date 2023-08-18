// default value of enums is always 0

enum SeatChoice {
    AISLE = 10, // override the default value
    MIDDLE, // this now will be 11
    WINDOW, // 12...
}

const seat = SeatChoice.AISLE; 

// Non-numerical pattern
// Once you start putting strings as values, you have to apply a default values for each of them

// Const added to avoid generating crazy amount of code by typescript...
const enum SeatChoice2 {
    AISLE = 'aisle', // override the default value
    MIDDLE = 'middle', // this now will be 11
    WINDOW = 'window', // 12...
}

const seat2 = SeatChoice2.WINDOW; 

export {};
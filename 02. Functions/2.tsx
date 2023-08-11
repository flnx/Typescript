function addTwo(num: number): number {
    // return 'hello';
    return num + 2;
}

let myValue = addTwo(5);

// function getValue(value: number) {
//     if (value > 5) {
//         return true;
//     }

//     return '200 OK';
// }

const getHello = (value: string): string => {
    return `Okay, ${value}`;
};

const result = getHello('Snoopy');

// const heroes = ['thor', 'spiderman', 'ironman'];
const heroes = ['thor', 'spiderman', 'ironman'];

heroes.map((hero: string): string | number => {
    return `The hero is ${hero}`;
});

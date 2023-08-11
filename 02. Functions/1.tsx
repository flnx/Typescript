function addTwo(num: number) {
    // return 'hello';
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

const loginUser = (name: string, email: string, isPiad: boolean = false) => {};

let myValue = addTwo(5);

getUpper('hello');

signUpUser('Walker', 'walker@yahoo.com', false);
loginUser('Thor', 'thor@yahoo.com', false);

export {};

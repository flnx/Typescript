type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number; // optional
};

const myUser: User = {
    _id: '12345',
    name: 'Thor',
    email: 'thor@yahoo.com',
    isActive: false,
};

myUser.email = 'thor@gmail.com';
// myUser._id = "123" // not allowed

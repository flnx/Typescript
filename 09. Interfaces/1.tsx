interface User {
    readonly _id: number;
    email: string;
    userId: number;
    googleId?: string;
    // someMethod(): string;
    someMethod: () => string;
    getCoupon: (couponName: string) => string;
}

// re-opening the interface

interface User {
    githubToken?: string;
}

interface Admin extends User {
    role: 'admin' | 'user' | 'learner';
}

const thor: User = {
    _id: 1,
    email: 'example@yahoo.com',
    userId: 1313,
    githubToken: 'github10',
    someMethod: () => 'hey there',
    getCoupon: (couponName) => couponName + '10',
};

const lee: Admin = {
    role: 'admin',
    _id: 2,
    email: 'example2@yahoo.com',
    userId: 1314,
    githubToken: 'github11',
    someMethod: () => 'hey there 2',
    getCoupon: (couponName) => couponName + '11',
};

export {};

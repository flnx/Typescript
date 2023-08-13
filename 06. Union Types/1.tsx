let score: number | string = 33;

score = 'string';

type User = {
    name: string;
    id: number;
};

type Admin = {
    username: string;
    id: number;
};

let thor: User | Admin = {
    name: 'thorr',
    id: 5,
};

thor = {
    username: 'thor',
    id: 334,
};

export {};

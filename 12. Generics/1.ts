const score: Array<number> = [];
const names: Array<string> = [];

function identityOne<Type>(val: Type): Type {
    return val;
}

identityOne(3);

function identityTwo<T>(val: T): T {
    return val;
}

identityTwo('test');

// ....

interface Bottle {
    brand: string;
    type: number;
}

identityTwo<Bottle>({
    brand: 'Devin',
    type: 5,
});

export {};

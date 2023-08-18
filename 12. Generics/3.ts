interface Database {
    connection: string;
    username: string;
    password: string;
}

function getUserNames<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo,
    };
}

getUserNames(3, {
    connection: 'https://example.com',
    username: 'thor',
    password: 'test123',
});

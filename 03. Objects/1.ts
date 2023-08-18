const user = {
    name: 'Thor',
    email: 'thor@yahoo.com',
    isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

const newUser = { 
    name: 'Thor', 
    isPaid: false,
    test: 'weird behavior'
};

createUser(newUser);

function createCourse(): { name: string; price: number } {
    return {
        name: 'typescript',
        price: 8.99,
    };
}

export {};

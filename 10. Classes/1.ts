class User {
    public email: string;
    private name: string;
    readonly city: string = 'Sofia';

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const thor = new User('thor@yahoo.com', 'thor');

export {};

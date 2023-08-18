class User {
    protected _courseCount = 1;

    readonly city: string = 'Sofia';

    constructor(
        public email: string,
        public name: string // private userId: string
    ) {}

    private deleteToken() {
        console.log('Token deleted');
    }

    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course count should be more than 1');
        }

        this._courseCount = courseNum;
    }
}

const thor = new User('thor@yahoo.com', 'thor');

class SubUser extends User {
    isFamily: boolean = true;

    changeCourseCount() {
        this._courseCount = 4;
    }
}

export {};

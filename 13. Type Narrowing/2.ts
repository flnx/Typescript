function printAll(strs: string | string[] | null) {
    // ? !!!!!!!!!!!!!!!
    // DON'T DO THIS!
    //  KEEP READING
    // ? !!!!!!!!!!!!!!!

    if (strs) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}

// .......

interface User {
    name: string;
    email: string;
}

interface Admin {
    name: string;
    email: string;
    isAdmin: boolean;
}

function isAdminAccount(account: User | Admin): boolean {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }

    return false;
}

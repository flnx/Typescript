function getDatabaseID(id: number | string) {
    if (typeof id === 'string') {
        id.toLowerCase(); // shows the methods for strings
    }

    console.log(`DB id is: ${id}`);
}

getDatabaseID(5);
getDatabaseID('5');

export {};

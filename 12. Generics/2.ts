function getSearchProduct<T>(products: T[]): T {
    // ... do some db operations

    const myIndex = 3;

    return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    return products[4];
};


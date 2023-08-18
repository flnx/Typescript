// NOTE: Not a good practice

// "Any" is a market to tell Typescript that we don't want to do type checking

// let hero; // if a type is not assigned, it will automatically be set to "any"
let hero: string; // don't

function getHero() {
    return 'thor';
}

hero = getHero();

type Fish = {
    swim: () => void;
};

type Bird = {
    fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet;
        return 'Fish food';
    } else {
        pet;
        'Bird food';
    }
}

export {};

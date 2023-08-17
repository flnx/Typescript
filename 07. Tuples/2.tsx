type User = [number , string];

const newUser: User = [112, "example@google.com"];

newUser[1] = "nothing stops me to override this value";

export {};
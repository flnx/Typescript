type cardNumber = {
    cardNum: string;
};

type cardDate = {
    cardDate: string;
};

type cardDetails = cardNumber & cardDate & {
    cvv: number
};

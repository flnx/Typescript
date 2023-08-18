function consoleError(errMsg: string):void {
    console.log(errMsg);

    // return "throws";
}

consoleError('An error has occured!');

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export {};
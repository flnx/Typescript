function detectType(val: number | string) {
    if (typeof val === 'string') {
        val = val.toLowerCase();

        return 'string';
    }

    return 'number';
}

function provideId(id: string | null): string | void {
    if (!id) {
        throw new Error('Please Provide ID');
    }

    const idLowered = id.toLowerCase();

    return idLowered;
}

interface Circle {
    kind: 'circle';
    radius: number;
}

interface Square {
    kind: 'square';
    side: number;
}

interface Rectangle {
    kind: 'rectangle';
    length: number;
    width: number;
}

type Shape = Rectangle | Circle | Square;

function getShape(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }

    // return shape.side * shape.side;
}

function getArea(shape: Shape | never) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;

        case 'rectangle':
            return shape.length * shape.width;

        case 'square':
            return shape.side * shape.side;

        default:
            const _defaultShape: never = shape;
            return _defaultShape;
    }
}

const Square = require('../createSquare');

describe('Square', () => {
    test('should render as this SVG', () => {

        const square = new Square();
        square.setColor('blue');

        expect(square.render()).toEqual(
        `<svg version="1.1" width="150" height="150" xmlns="http://www.w3.org/2000/svg">
            <rect width="150" height="150" fill="blue" />
            <text x="75" y="100" font-size="60" text-anchor="middle" fill="white">${letters}</text>
        </svg>`
        );
    });
});
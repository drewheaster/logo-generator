const Triangle = require('../createTriangle');

describe('Triangle', () => {
    test('should render as this SVG', () => {

        const triangle = new Triangle();
        triangle.setColor('blue');

        expect(triangle.render()).toEqual(
        `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
            <path d="M300 280h-300l150-250z" fill="blue"/>
            <text x="150" y="200" font-size="60" text-anchor="middle" fill="white">${letters}</text>
        </svg>`
        );
    });
});
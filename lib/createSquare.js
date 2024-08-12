class Square {
    constructor(color, letters) {
        this.color = color;
        this.letters = letters;
        this.shape = `
        <svg version="1.1" width="150" height="150" xmlns="http://www.w3.org/2000/svg">
            <rect width="150" height="150" fill="${color}" />
            <text x="75" y="100" font-size="60" text-anchor="middle" fill="white">${letters}</text>
        </svg>`
    }
};

module.exports = Square;
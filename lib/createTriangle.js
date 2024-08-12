const fs = require('fs');

class Triangle {
    constructor(color, letters) {
        this.color = color;
        this.letters = letters;
        this.shape = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
            <path d="M300 280h-300l150-250z" fill="${color}"/>
            <text x="150" y="200" font-size="60" text-anchor="middle" fill="white">${letters}</text>
        </svg>`
    }
};

const square = new Triangle(process.argv[2], process.argv[3])

fs.writeFile('triangle.svg', square.shape, (err) => {
    if(err) {
        console.error(err);
    } else {
        console.log('Success!')
    }
})

module.exports = Triangle;
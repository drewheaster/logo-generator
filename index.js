const inquirer = require('inquirer');
const fs = require('fs');
const Square = require('./lib/createSquare');
const Circle = require('./lib/createCircle');
const Triangle = require('./lib/createTriangle');

const createLogo = function() {
    
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Please select a shape for your logo:',
                choices: ['Square', 'Circle', 'Triangle'],
                name: 'shape'
            },
            {
                type: 'input',
                message: 'Please provide a color for your logo:',
                name: 'color'
            },
            {
                type: 'input',
                message: 'Please provide a maximum of THREE letters for your logo:',
                name: 'text'
            }
        ]).then((answers) => {
            if(answers.shape === 'Square') {
                const square = new Square(answers.color, answers.text);

                fs.writeFile('square.svg', square.shape, (err) => {
                    if(err) {
                        console.error(err);
                    } else {
                        console.log('Successfully created square logo!');
                    };
                });
            } else if(answers.shape === 'Circle') {
                const circle = new Circle(answers.color, answers.text);

                fs.writeFile('circle.svg', circle.shape, (err) => {
                    if(err) {
                        console.error(err);
                    } else {
                        console.log('Successfully created circle logo!');
                    };
                });
            } else if (answers.shape === 'Triangle') {
                const triangle = new Triangle(answers.color, answers.text);

                fs.writeFile('circle.svg', triangle.shape, (err) => {
                    if(err) {
                        console.error(err);
                    } else {
                        console.log('Successfully created triangle logo!');
                    };
                });
            }
        });

};

createLogo();
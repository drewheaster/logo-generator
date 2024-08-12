const inquirer = require('inquirer');
const fs = require('fs');
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
            if(answers.shape === 'Square'){
                console.log('Chose square')
            }
        });

};

createLogo();
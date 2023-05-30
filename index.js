const fs = require('fs/promises');
const inquirer = require('inquirer');

const Logo = require('./lib/logo');
const { Triangle, Circle, Square } = require('./lib/shapes');
const Text = require('./lib/text');

const questions = [{
    name: 'text',
    type: 'input',
    message: 'Enter text to place in your logo (max three characters): ',
    validate: function(value) {
        if (value.length > 3) {
            return 'Too long (max three characters)';
        }
        return true;
    }
}, {
    name: 'textColor',
    type: 'input',
    message: 'Enter a color for your text: ',
    default: 'white',
    when: function(prevValues) {
        return prevValues.text.length > 0;
    }
}, {
    name: 'shape',
    type: 'list',
    message: 'Choose a shape for your logo: ',
    choices: [{
        name: 'Triangle',
        value: {
            class: Triangle,
            textOffsetY: 30
        }
     }, {
        name: 'Circle',
        value: {
            class: Circle
        }
     }, {
        name: 'Square',
        value: {
            class: Square
        }
     }]
}, {
    name: 'shapeColor',
    type: 'input',
    message: 'Enter a color for your shape: ',
    default: 'black'
}, {
    name: 'shapeColorFill',
    type: 'confirm',
    message: 'Fill your shape with a solid color? ',
    default: true
}, {
    name: 'outputFile',
    type: 'input',
    message: 'Enter a file path for your logo to be output to: ',
    default: './logo.svg'
}];

inquirer.prompt(questions)
.then(answers => {
    let elements = [new answers.shape.class(answers.shapeColor, answers.shapeColorFill)];
    if (answers.text) {
        const y = Text.defaultY + (answers.shape.textOffsetY ?? 0);
        elements.push(new Text(answers.text, answers.textColor, { y }));
    }
    const logo = new Logo(...elements);
    return fs.writeFile(answers.outputFile, logo.render());
}).then(() => {
    console.log('Done!');
}).catch(err => {
    console.error(err);
    process.exit(1);
});
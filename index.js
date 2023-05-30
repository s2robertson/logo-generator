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
        return value.length <= 3;
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
    name: 'Shape',
    type: 'list',
    message: 'Choose a shape for your logo: ',
    choices: [{
        name: 'Triangle',
        value: Triangle
     }, {
        name: 'Circle',
        value: Circle
     }, {
        name: 'Square',
        value: Square
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
    let elements = [new answers.Shape(answers.shapeColor, answers.shapeColorFill)];
    if (answers.text) {
        elements.push(new Text(answers.text, answers.textColor));
    }
    const logo = new Logo(...elements);
    return fs.writeFile(answers.outputFile, logo.render());
}).then(() => {
    console.log('Done!');
}).catch(err => {
    console.error(err);
    process.exit(1);
});
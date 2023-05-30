const Logo = require('./logo');
const { Triangle, Circle, Square } = require('./shapes');
const Text = require('./text');

describe('Logo tests', () => {
    test('Triangle test', () => {
        const triangle = new Triangle('red', true);
        const text = new Text('ABC', 'white');
        const logo = new Logo(triangle, text);
        expect(logo.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${triangle.render()}${text.render()}</svg>`);
    })

    test('Circle test', () => {
        const circle = new Circle('blue', true);
        const text = new Text('svg', 'white');
        const logo = new Logo(circle, text);
        expect(logo.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${circle.render()}${text.render()}</svg>`);
    })

    test('Square test', () => {
        const square = new Square('green', true);
        const text = new Text('123', 'white');
        const logo = new Logo(square, text);
        expect(logo.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${square.render()}${text.render()}</svg>`);
    })

    test('No text test', () => {
        const circle = new Circle('black', false);
        const logo = new Logo(circle);
        expect(logo.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${circle.render()}</svg>`);
    })
})
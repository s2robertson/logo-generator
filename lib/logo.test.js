const Logo = require('./logo');
const { Triangle, Circle, Square } = require('./shapes');
const Text = require('./text');

describe('Logo tests', () => {
    test('Triangle test', () => {
        const triangle = new Triangle('red', true);
        const text = new Text('ABC', 'white');
        const logo = new Logo(triangle, text);
        expect(logo.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>`);
    })

    test('Circle test', () => {
        const circle = new Circle('blue', true);
        const text = new Text('svg', 'white');
        const logo = new Logo(circle, text);
        expect(logo.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">svg</text></svg>`);
    })

    test('Square test', () => {
        const square = new Square('green', true);
        const text = new Text('123', 'white');
        const logo = new Logo(square, text);
        expect(logo.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="20" width="160" height="160" fill="green" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="white">123</text></svg>`);
    })

    test('No text test', () => {
        const circle = new Circle('black', false);
        const logo = new Logo(circle);
        expect(logo.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" stroke="black" stroke-width="10" fill="transparent" /></svg>`);
    })
})
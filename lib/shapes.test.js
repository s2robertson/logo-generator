const { Triangle, Circle, Square } = require('./shapes');

describe.each([
    ['red'], ['blue'], ['#ffffff']
])('Triangle tests', (color) => {
    test('Fill color is set correctly', () => {
        const t = new Triangle(color);
        expect(t.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`);
    })
    
    test('Outline (no fill) color is set correctly', () => {
        const t = new Triangle(color, false);
        expect(t.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" stroke="${color}" stroke-width="10" />`)
    })
})

describe('Circle tests', () => {

})

describe('Square tests', () => {

})
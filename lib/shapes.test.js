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

describe.each([
    ['green'], ['goldenrod'], ['#48D1CC']
])('Circle tests', (color) => {
    test('Fill color is set correctly', () => {
        const c = new Circle(color);
        expect(c.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
    })

    test('Outline (no fill) color is set correctly', () => {
        const c = new Circle(color, false);
        expect(c.render()).toEqual(`<circle cx="150" cy="100" r="80" stroke="${color}" stroke-width="10" />`);
    })
})

describe.each([
    ['hotpink'], ['rebeccapurple'], ['#778899']
])('Square tests', (color) => {
    test('Fill color is set correctly', () => {
        const s = new Square(color);
        expect(s.render()).toEqual(`<rect x="70" y="20" width="160" height="160" fill="${color}" />`);
    })

    test('Outline (no fill) color is set correctly', () => {
        const s = new Square(color, false);
        expect(s.render()).toEqual(`<rect x="70" y="20" width="160" height="160" stroke="${color}" stroke-width="10" />`)
    })
})
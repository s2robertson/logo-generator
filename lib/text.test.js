const Text = require('./text');

test.each([
    ['red'], ['blue'], ['#ffffff']
])('Text color should be used as fill value', color => {
    const t = new Text('XYZ', color);
    expect(t.render()).toEqual(`<text x="150" y="120" font-size="60" text-anchor="middle" fill="${color}">XYZ</text>`)
})

test.each([
    ['ABC'], ['123'], ['STE']
])('Text content should appear in the output', content => {
    const t = new Text(content, 'black');
    expect(t.render()).toEqual(`<text x="150" y="120" font-size="60" text-anchor="middle" fill="black">${content}</text>`)
})
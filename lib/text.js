class Text {
    static defaultY = 120;

    // room for expansion: add options param for x, y, font-size, and text-anchor
    constructor(content, color, { y = Text.defaultY } = {}) {
        this.content = content;
        this.color = color;
        this.y = y;
    }

    render() {
        return `<text x="150" y="${this.y}" font-size="60" text-anchor="middle" fill="${this.color}">${this.content}</text>`;
    }
}

module.exports = Text;
class Text {
    static defaultY = 120;

    // room for expansion: add options param for x, y, font-size, and text-anchor
    constructor(content, color, { y } = defaultOptions) {
        this.content = content;
        this.color = color;
        this.y = y;
    }

    render() {
        return `<text x="150" y="${this.y}" font-size="60" text-anchor="middle" fill="${this.color}">${this.content}</text>`;
    }
}

const defaultOptions = {
    y: Text.defaultY
}

module.exports = Text;
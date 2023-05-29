class Text {
    // room for expansion: add options param for x, y, font-size, and text-anchor
    constructor(content, color) {
        this.content = content;
        this.color = color;
    }

    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.content}</text>`;
    }
}

module.exports = Text;
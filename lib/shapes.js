
class Shape {
    constructor(color, colorFill = true) {
        this.color = color;
        this.colorFill = colorFill;
    }

    renderStyle() {
        return this.colorFill ? 
            `fill="${this.color}"` : 
            `stroke="${this.color}" stroke-width="10" fill="transparent"`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" ${this.renderStyle()} />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" ${this.renderStyle()} />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="70" y="20" width="160" height="160" ${this.renderStyle()} />`
    }
}

module.exports = { Triangle, Circle, Square }
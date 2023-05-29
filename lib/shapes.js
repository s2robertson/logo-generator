
class Shape {
    constructor(color, colorFill = true) {
        this.color = color;
        this.colorFill = colorFill;
    }

    renderStyle() {
        return this.colorFill ? 
            `fill="${this.color}"` : 
            `stroke="${this.color}" stroke-width="10"`;
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

}

module.exports = { Triangle, Circle, Square }
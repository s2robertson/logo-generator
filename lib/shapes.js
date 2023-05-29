
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

}

class Square extends Shape {

}

module.exports = { Triangle, Circle, Square }
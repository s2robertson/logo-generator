class Logo {
    constructor(...elements) {
        this.elements = elements;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.elements.map(element => element.render()).join('')}</svg>`;
    }
}

module.exports = Logo;
class Sauce {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories;
    }

    getIngridientname() {
        return this.name;
    }

    getCalories() {
        return this.calories;
    }

    
    toString() {
        return `With sauce  ${this.name} `;

    }
}

module.exports = Sauce;
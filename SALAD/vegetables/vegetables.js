class Vegetables {
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
        return `Your ingridient is  ${this.name} `;

    }


}



module.exports = Vegetables;
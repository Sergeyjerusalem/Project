class Salade {
    constructor() {
        this.vegetables = [];
        this.sauce = null;
    }


    ingridientFilter(name, calories) {
        if (this.vegetables.find((vegetable) => vegetable.getIngridientname() == name)) {
            return this.vegetables.find((vegetable) => vegetable.getIngridientname() == name);
        } else if (this.vegetables.find((vegetable) => vegetable.getCalories() == calories)) {
            return this.vegetables.find((vegetable) => vegetable.getCalories() == calories);

        }
    }

    sauceFilter(name) {
        if (this.sauce.find((sauce) => sauce.getIngridientname() == name)) {
            return this.sauce.find((sauce) => sauce.getIngridientname() == name);
        }
    }

    Total() {
        let sum = this.vegetables.reduce((a, b) => a + b.calories, 0);
        return `Your salad has ${sum} calories`
    }

    saladeSort() {
        return this.vegetables.sort();
    }
}

module.exports = Salade;
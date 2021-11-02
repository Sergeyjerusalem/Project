let Salade = require('/Users/pro/lol/SALAD/salad/salad.js');


class Saladbuilder {
    constructor() {
        this.saladbuilder = new Salade;
    }

    addVegetable(vegetable) {
        this.saladbuilder.vegetables.push(vegetable);
        return this;
    }

    addIngridientsPool(vegetables) {
        this.saladbuilder.vegetables = [...this.saladbuilder.vegetables, ...vegetables];
        return this;
    }

    addSauce(sauce) {
        this.saladbuilder.sauce = sauce;
        return this;
    }
    
    build() {
       return this.saladbuilder;
    }
}

module.exports = Saladbuilder;

const Cucumber = require('./cucumber');

class Cucumberprep extends Cucumber {
    constructor(name, calories,sort) {
        super(name, calories);
        this.sort = sort;
    }

}

module.exports = Cucumberprep;
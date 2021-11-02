const Tomatoe = require('./tomataoe');

class Tomatoeprep extends Tomatoe {
    constructor(name, calories, sort) {
        super(name, calories);
        this.sort = sort;
    }

}

module.exports = Tomatoeprep;
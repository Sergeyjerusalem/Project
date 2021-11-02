const Aisberg = require('./aisberg');

class Aisbergprep extends Aisberg {
    constructor(name, calories, sort) {
        super(name, calories);
        this.sort = sort;
    }

}

module.exports = Aisbergprep;
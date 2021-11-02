const Oliveoil = require('/Users/pro/lol/SALAD/sauce/oliveoil/oliveoil.js');
const Mayo = require('/Users/pro/lol/SALAD/sauce/mayo/mayo.js');
const Sourcream = require ('/Users/pro/lol/SALAD/sauce/sourcream/sourcream.js')

class SauceFactory {
    create(sauce) {
        if (sauce === 'Oliveoil') {
            return new Oliveoil('Oliveoil', Math.round((Math.random() * 10) + 1));
        } else if (sauce === 'Mayo') {
            return new Mayo('Mayo', Math.round((Math.random() * 10) + 1))
        } else if (sauce === 'Sourcream'){
            return new Sourcream('Sourcream', Math.round((Math.random() * 10) + 1))
        } else {
            console.error('Wrong sort of Sauce');
        }
    }
}

module.exports = SauceFactory;
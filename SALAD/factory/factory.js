const Cucumberprep = require('/Users/pro/lol/SALAD/vegetables/Cucumber/cucumberprep.js');
const Tomatoeprep = require('/Users/pro/lol/SALAD/vegetables/Tomatoe/tomatoeprep.js');
const Aisbergprep = require('/Users/pro/lol/SALAD/vegetables/Aisberg/asibergprepared.js')

class AisbergFactory {
    create(sort) {
        if (sort === 'French') {
            return new Aisbergprep('Aisberg', Math.round((Math.random() * 10) + 1), 'French');
        } else if (sort === 'Belorussian') {
            return new Aisbergprep('Aisberg', Math.round((Math.random() * 10) + 1), 'Belorussian');
        } else if (sort === 'African') {
            return new Aisbergprep('Aisberg', Math.round((Math.random() * 10) + 1), 'African');
        } else {
            console.error('Wrong sort of Aisberg');
        }
    }
}



class CucumberFactory {
    create(sort) {
        if (sort === 'Cornishon') {
            return new Cucumberprep('Cucumber', Math.round((Math.random() * 10) + 1), 'Cornishon');
        } else if (sort === 'Armenian') {
            return new Cucumberprep('Cucumber', Math.round((Math.random() * 10) + 1), 'Armenian');
        } else if (sort === 'English') {
            return new Cucumberprep('Cucumber', Math.round((Math.random() * 10) + 1), 'English');
        } else {
            console.error('Wrong sort of Cucumber')
        }
    }
}

class TomatoeFactory {
    create(sort) {
        if (sort === 'Cherry') {
            return new Tomatoeprep('Tomatoe', Math.round((Math.random() * 10) + 1), 'Cherry');
        } else if (sort === 'Armenian') {
            return new Tomatoeprep('Tomatoe', Math.round((Math.random() * 10) + 1), 'Armenian');
        } else if (sort === 'Black') {
            return new Tomatoeprep('Tomatoe', Math.round((Math.random() * 10) + 1), 'Black');
        } else {
            console.error('Wrong sort of Tomatoe');
        }
    }
}


exports.TomatoeFactory = TomatoeFactory;
exports.CucumberFactory = CucumberFactory;
exports.AisbergFactory = AisbergFactory;



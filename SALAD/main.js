const prompt = require('prompt-promise');
const TomatoeFactory = require('/Users/pro/lol/SALAD/factory/factory.js').TomatoeFactory;
const CucumberFactory = require('/Users/pro/lol/SALAD/factory/factory.js').CucumberFactory;
const AisbergFactory = require('/Users/pro/lol/SALAD/factory/factory.js').AisbergFactory;
const SauceFactory = require('/Users/pro/lol/SALAD/factory/saucefactory.js')
const Saladbuilder = require('./builder/saladbuilder');

let saucefactory = new SauceFactory;
let tomfactory = new TomatoeFactory;
let cucufactory = new CucumberFactory;
let aisfactory = new AisbergFactory;

let ingridients = [];


let sauce = null;

let i = 0;

(async () => {
    while (i != 3) {
        if (i == 0) {
            const sort = await prompt('Enter your Sort of tomatoe  '); // Black for example.
            const num = await prompt('Enter your number of tomatoe  ');
            for (j = 0; j < num; j++) {
                ingridients.push(tomfactory.create(sort));

            }
            i = 1;
        } else if (i == 1) {
            const sort = await prompt('Enter your Sort of cucumber  '); // Cornishon for example.
            const num = await prompt('Enter your number of cucumbers  ');
            for (j = 0; j < num; j++) {
                ingridients.push(cucufactory.create(sort));
            }
            i = 2;
        } else if (i == 2) {
            const sort = await prompt('Enter your Sort of aisberg  '); // African for example
            const num = await prompt('Enter your number of asiberg  ');
            for (j = 0; j < num; j++) {
                ingridients.push(aisfactory.create(sort));
            }
            i = 3;
        }
    }
    const sc = await prompt('Enter your sauce') // Mayo for example
    sauce = saucefactory.create(sc);
    
    let salade = new Saladbuilder()
        .addIngridientsPool(ingridients)
        .addSauce(sauce)
        .build();

    const vegname = await prompt('Enter your ingridient  '); // Cucumber, Tomatoe, Asiberg
    const calories = await prompt('Enter your calories  ');
    const vegetable = salade.ingridientFilter(vegname, calories);
    console.log(vegetable.toString());
    console.log(sauce.toString());
    console.log(salade.Total())
    console.log(salade.saladeSort());
    prompt.finish();
})();


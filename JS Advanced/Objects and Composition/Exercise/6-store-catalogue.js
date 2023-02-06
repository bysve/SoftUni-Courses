function storeCatalogue(array) {

    const catalogue = {};

    for (const line of array) {
        const [product, price] = line.split(' : ');
        const firstLetter = product[0];
        if (!catalogue.hasOwnProperty(firstLetter)) {
            catalogue[firstLetter] = {};
        }
        catalogue[firstLetter][product] = price;
    }

    const sortedKeys = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (const key of sortedKeys) {
        console.log(key);

        const sortedProducts = Object.keys(catalogue[key]).sort((a, b) => a.localeCompare(b));

        for (const product of sortedProducts) {
            console.log(`  ${product}: ${catalogue[key][product]}`);
        }
    }

}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
storeCatalogue(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);

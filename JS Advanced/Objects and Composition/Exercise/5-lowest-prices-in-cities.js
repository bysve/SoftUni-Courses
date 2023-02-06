function lowestPrice(array) {

    let obj = {};

    array.forEach(line => {
        const [town, product, price] = line.split(' | ');

        if (!obj[product]) {
            obj[product] = {};
        }
        obj[product][town] = Number(price);
    });

    const result = [];

    for (const product in obj) {
        let sorted = Object.entries(obj[product]).sort((a,b) => a[1] - b[1]);
        let [town, price] = sorted[0];
        result.push(`${product} -> ${price} (${town})`);
    }

    console.log(result.join('\n'));
}
lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);
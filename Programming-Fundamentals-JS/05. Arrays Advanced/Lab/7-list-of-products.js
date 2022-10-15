function listOfProducts(products) {

    products.sort();

    for (let index = 0; index < products.length; index++) {
        console.log(`${index + 1}.${products[index]}`);
    };
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
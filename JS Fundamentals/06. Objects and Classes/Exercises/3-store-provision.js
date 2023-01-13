function storeProvision(stock, order) {

    let inStock = {};

    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let quantity = Number(stock[i + 1]);
        inStock[product] = quantity;
    }

    for (let i = 0; i < order.length; i += 2) {
        let product = order[i];
        let quantity = Number(order[i + 1]);
        if (!inStock.hasOwnProperty(product)) {
            inStock[product] = 0;
        }
        inStock[product] += quantity;
    }

    for (const key in inStock) {
        console.log(`${key} -> ${inStock[key]}`);
    }

}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
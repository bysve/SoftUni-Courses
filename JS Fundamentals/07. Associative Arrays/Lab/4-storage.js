function storage(input) {

    let storage = new Map();

    input.forEach(element => {
        let [item, quantity] = element.split(' ');
        quantity = Number(quantity);

        if (storage.has(item)) {
            quantity += storage.get(item);
        }
        storage.set(item, quantity);
    });

    for (const [item, quantity] of storage) {
        console.log(`${item} -> ${quantity}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
); 
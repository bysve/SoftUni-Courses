function furniture(input) {

    let totalMoney = 0;
    let pattern = />>(?<furnitureName>[A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;
    let furnitureArr = [];

    let line = input.shift();

    while (line !== 'Purchase') {

        let validLine = pattern.exec(line);

        while (validLine) {
            let furnitureName = validLine.groups.furnitureName;
            furnitureArr.push(furnitureName);
            let price = validLine.groups.price;
            let quantity = validLine.groups.quantity;
            totalMoney += price * quantity;

            validLine = pattern.exec(line);
        }
        line = input.shift();
    }

    console.log(`Bought furniture:`);
    if (furnitureArr.length > 0) {
        console.log(furnitureArr.join('\n'));
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);
function softUniBarIncome(input) {

    let pattern = /%(?<customer>[A-Z][a-z]+)%[^\d|$%.]*<(?<product>\w+)>[^\d|$%.]*\|(?<count>\d+)\|[^\d|$%.]*(?<price>\d+\.?\d+)\$/g;
    let totalIncome = 0;

    let newLine = input.shift();

    while (newLine !== 'end of shift') {

        let newCustomer = pattern.exec(newLine);

        if (newCustomer) {
            //"{customerName}: {product} - {totalPrice}"
            let customerName = newCustomer.groups.customer;
            let product = newCustomer.groups.product;
            let count = Number(newCustomer.groups.count);
            let price = Number(newCustomer.groups.price);
            let currentTotal = count * price;

            console.log(`${customerName}: ${product} - ${currentTotal.toFixed(2)}`);

            totalIncome += currentTotal;
            newCustomer = pattern.exec(newLine);
        }
        newLine = input.shift();
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
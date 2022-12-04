function adAstra(input) {

    let inputText = input.shift();
    let pattern = /([\|#])(?<name>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let products = [];
    let totalKcal = 0;

    let currentProduct = pattern.exec(inputText);

    while (currentProduct) {

        let item = currentProduct.groups.name;
        let date = currentProduct.groups.date;
        let calories = Number(currentProduct.groups.calories);
        totalKcal += calories;

        products.push({
            'item': item,
            'date': date,
            'calories': calories,
        });

        currentProduct = pattern.exec(inputText);
    }

    let days = Math.floor(totalKcal / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    products.forEach(p => console.log(`Item: ${p.item}, Best before: ${p.date}, Nutrition: ${p.calories}`));
}

adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);
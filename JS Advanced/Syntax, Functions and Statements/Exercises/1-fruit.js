function fruit(fruit, weightGr, priceKg) {

    const weightKG = weightGr / 1000;
    const money = priceKg * weightKG;

    console.log(`I need $${money.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);
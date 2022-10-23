function burgerBus(args) {

    let citiesCount = Number(args.shift());
    let totalProfit = 0;

    for (let i = 1; i <= citiesCount; i++) {
        let currentCity = args.shift();
        let currentIncome = Number(args.shift());
        let currentExpences = Number(args.shift());


        if (i % 3 === 0 && i % 5 !== 0) {
            currentExpences *= 1.50;
        }
        if (i % 5 === 0) {
            currentIncome *= 0.90;
        }

        let profit = currentIncome - currentExpences;
        console.log(`In ${currentCity} Burger Bus earned ${profit.toFixed(2)} leva.`);
        totalProfit += profit;
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}

burgerBus((["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"])
);
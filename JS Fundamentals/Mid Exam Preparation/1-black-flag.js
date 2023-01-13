function blackFlag(args) {

    let days = Number(args.shift());
    let dailyPlunder = Number(args.shift());
    let targetPlunder = Number(args.shift());

    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;

        if (i % 3 === 0) {
            totalPlunder += dailyPlunder * 0.50;
        }

        if (i % 5 === 0) {
            totalPlunder *= 0.70;
        }
    }
    if (totalPlunder < targetPlunder) {
        let percentage = totalPlunder / targetPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    } else {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }
}

blackFlag((["10",
"20",
"380"]));
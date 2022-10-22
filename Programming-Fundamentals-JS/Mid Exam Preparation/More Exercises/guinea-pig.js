function guineaPig(args) {

    let foodInGr = Number(args[0]) * 1000;
    let hayInGr = Number(args[1]) * 1000;
    let coverInGr = Number(args[2]) * 1000;
    let petsWeightInGr = Number(args[3]) * 1000;
    let runsOutFood = false;

    for (let day = 1; day <= 30; day++) {
        foodInGr -= 300;

        if (day % 2 === 0) {
            hayInGr -= foodInGr * 0.05;
        }

        if (day % 3 === 0) {
            coverInGr -= petsWeightInGr / 3;
        }

        if (hayInGr < 0 || foodInGr < 0 || coverInGr < 0) {
            runsOutFood = true;
            break;
        }
    }

    if (runsOutFood) {
        console.log(`Merry must go to the pet store!`);
    } else {
        console.log
        (`Everything is fine! Puppy is happy! Food: ${(foodInGr / 1000).toFixed(2)}, Hay: ${(hayInGr / 1000).toFixed(2)}, Cover: ${(coverInGr / 1000).toFixed(2)}.`);
    }
}

guineaPig((["10",
    "5",
    "5.2",
    "1"]));
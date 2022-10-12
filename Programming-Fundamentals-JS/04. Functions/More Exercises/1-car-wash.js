function carWash(arr) {

    let valueOfClean = 0;
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let command = arr[i];
        switch (command) {
            case 'soap':
                valueOfClean += 10;
                break;
            case 'water':
                valueOfClean *= 1.20;
                break;
            case 'vacuum cleaner':
                valueOfClean *= 1.25;
                break;
            case 'mud':
                valueOfClean *= 0.90;
                break;
        }
    }

    console.log(`The car is ${valueOfClean.toFixed(2)}% clean.`);

}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
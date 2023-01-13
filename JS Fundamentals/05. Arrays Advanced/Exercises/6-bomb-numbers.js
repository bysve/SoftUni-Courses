function bombNumbers(arr, specialNumbers) {

    let bombNum = specialNumbers[0];
    let bombPower = specialNumbers[1];

    while (arr.includes(bombNum)) {

        if (arr.includes(bombNum)) {
            let bombIndex = arr.indexOf(bombNum);
            let numbersToDetonate = Math.max((1 + 2 * bombPower), 0);
            let indexToStartDetonate = Math.max((bombIndex - bombPower), 0)
            arr.splice(indexToStartDetonate, numbersToDetonate);
        }
    }

    let sum = 0;

    for (const el of arr) {
        sum += el;
    }

    console.log(sum);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);
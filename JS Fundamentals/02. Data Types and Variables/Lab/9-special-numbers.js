function specialNumbers(number) {

    for (let i = 1; i <= number; i++) {
        let numAsString = i.toString();
        let sumOfDigits = 0;
        for (let j = 0; j < numAsString.length; j++) {
            sumOfDigits += Number(numAsString[j]);
        }
        if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
specialNumbers(20);
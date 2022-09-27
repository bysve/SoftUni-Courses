function sumDigits(number) {

    let numberAsString = number.toString();
    let stringLenght = numberAsString.length;
    let sum = 0;

    for (let i = 0; i < stringLenght; i++) {
        let currentDigitFromString = numberAsString[i];
        let currentDigitAsNumber = Number(currentDigitFromString);
        sum += currentDigitAsNumber;
    }
    console.log(sum);
}
sumDigits(245678);
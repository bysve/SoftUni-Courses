function oddAndEvenSum(number) {

    let oddSum = 0;
    let evenSum = 0;
    let numberAsString = number.toString();
    let numberAsStringLength = numberAsString.length;

    for (let i = 0; i < numberAsStringLength; i++) {
        let currentDigit = Number(numberAsString[i]);
        if (currentDigit % 2 === 0) {
            evenSum += currentDigit;
        } else {
            oddSum += currentDigit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
function signCheck(numOne, numTwo, numThree) {

    let checkNumOneAndTwo = (numOne, numTwo) => {
        if ((numOne > 0 && numTwo > 0) || (numOne < 0 && numTwo < 0)) {
            return 'Positive';
        } else {
            return 'Negative';
        }
    }
    let result = checkNumOneAndTwo(numOne, numTwo);

    let checkNumThree = (result, numThree) => {
        if ((result === 'Positive' && numThree > 0) || (result === 'Negative' && numThree < 0)) {
            return 'Positive';
        } else {
            return 'Negative'
        }
    }

    result = checkNumThree(checkNumOneAndTwo(numOne, numTwo), numThree);
    console.log(result);
}

signCheck(
    -6,
    - 12,
    14
);
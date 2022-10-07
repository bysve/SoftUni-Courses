function simpleCalculator(numOne, numTwo, operator) {

    let multiply = (numOne, numTwo) => numOne * numTwo;

    let divide = (numOne, numTwo) => numOne / numTwo;

    let add = (numOne, numTwo) => numOne + numTwo;

    let subtract = (numOne, numTwo) => numOne - numTwo;

    let result;

    switch (operator) {
        case 'multiply':
            result = multiply(numOne, numTwo);
            break;
        case 'divide':
            result = divide(numOne, numTwo);
            break;
        case 'add':
            result = add(numOne, numTwo);
            break;
        case 'subtract':
            result = subtract(numOne, numTwo);
            break;
    }
    console.log(result);
}

simpleCalculator(
    40,
    8,
    'divide'
);


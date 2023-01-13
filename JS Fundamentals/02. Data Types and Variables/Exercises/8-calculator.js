// Write a function that receives 3 parameters: a number, an operator (string), and another number.
// The operator can be:  '+', '-', '/', '*'. Print the result of the calculation on the console formatted to the second decimal point.

function calculator(firstNumber, operator, secondNumber){

    let result = 0;
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
    }

    console.log(result.toFixed(2));
}
calculator(5, '+', 10 );
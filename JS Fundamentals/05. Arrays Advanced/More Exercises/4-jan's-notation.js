function notation(input) {

    let savedNums = [];
    let operator = '';
    let result = 0;

    let notEnoughOperands = false;

    for (const el of input) {
        if (typeof el == "number") {
            savedNums.push(el);
        } else {
            result = 0;
            operator = el;

            if (savedNums.length < 2) {
                console.log('Error: not enough operands!');
                notEnoughOperands = true;
                break;
            }

            let firstNum = savedNums[savedNums.length - 2];
            let secondNum = savedNums[savedNums.length - 1];

            if (operator === '+') {
                result += firstNum + secondNum;
            } else if (operator === '-') {
                result += firstNum - secondNum;
            } else if (operator === '*') {
                result += firstNum * secondNum;
            } else if (operator === '/') {
                result += firstNum / secondNum;
            }

            savedNums.splice(savedNums.indexOf(firstNum), 2, result);
        }
    }

    if (!notEnoughOperands) {
        if (savedNums.length === 1) {
            console.log(result);
        } else if (savedNums.length > 1) {
            console.log('Error: too many operands!');
        }
    }
}

notation([15,
    '/']
);
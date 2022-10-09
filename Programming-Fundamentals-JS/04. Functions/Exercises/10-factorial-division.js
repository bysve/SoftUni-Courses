function factorialDivision(firstNum, secondNum) {

    let firstFactorial = (firstNum) => {
        if (firstNum === 0) {
            return 1;
        } else {
            return firstNum * firstFactorial(firstNum - 1);
        }
    };

    const secondFactorial = (secondNum) => {
        if (secondNum === 0) {
            return 1;
        } else {
            return secondNum * firstFactorial(secondNum - 1);
        }
    };

    let result = firstFactorial(firstNum) / secondFactorial(secondNum);
    console.log(result.toFixed(2));

}

factorialDivision(5, 2);
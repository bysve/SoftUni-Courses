function sumOfNumber(n, m) {

    const num1 = Number(n);
    const num2 = Number(m);
    let result = 0;

    for (let i = num1; i <= num2; i++) {
        result += i;
    }

console.log(result);
}

sumOfNumber('1', '5');
sumOfNumber('-8', '20');
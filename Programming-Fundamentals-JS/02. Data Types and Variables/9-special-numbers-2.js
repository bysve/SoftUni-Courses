function specialNumbers2(number){

    let num = number;
    let sum = 0;
    for(let i = 1; i <= number; i++){
        let lastDigit = parseInt(num % 10);
        num /= 10;
        sum += lastDigit;
        console.log(sum);
        sum = 0;
    }
}
specialNumbers2(15);
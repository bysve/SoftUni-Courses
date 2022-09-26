function division(number) {

    let divisor = 0;
    let notDivisible = false;
    if (number % 10 == 0) {
        divisor = 10;
    } else if (number % 7 == 0) {
        divisor = 7;
    } else if (number % 6 == 0) {
        divisor = 6;
    } else if (number % 3 == 0) {
        divisor = 3;
    } else if (number % 2 == 0) {
        divisor = 2
    } else {
        notDivisible = true;
    }

    if(notDivisible){
        console.log('Not divisible');
    } else {
        console.log(`The number is divisible by ${divisor}`);
    }
}
division(30);
division(1643);
// Write a program that receives a number n.  For all numbers in the range [1…n] 
// print the number and if it is special or not (True / False).
// •	A number is special when its sum of digits is 5, 7 or 11.

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
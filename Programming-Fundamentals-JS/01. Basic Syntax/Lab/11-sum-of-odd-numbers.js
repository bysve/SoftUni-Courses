// Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.
// Input
// You will receive a number – n. This number shows how many odd numbers you should print.
// Output
// Print the next n odd numbers, starting from 1, separated by newlines.
// On the last line, print the sum of these numbers in the following format: `Sum: {total sum}`

function sumOfOddNumbers(num) {
    let oddNum = 1;
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        console.log(oddNum);
        if(i == num){
            break;
        }
        oddNum += 2;
        sum += oddNum;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
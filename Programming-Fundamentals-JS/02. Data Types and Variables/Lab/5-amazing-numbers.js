// Write a function, which as input will receive a number.
// Check and print if it is amazing or not into the following format: 
// 	"{number} Amazing? {True or False}"
// An amazing number includes the digit 9 the sum of its digits. 
// Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)

function amazingNumbers(number){

    let sumOfDigits = 0;
    let numAsString = String(number);
    let stringLength = numAsString.length;

    for(let i = 0; i < stringLength; i++){
        let currentNumber = Number(numAsString[i]);
        sumOfDigits += currentNumber;
    }

    let isAmazing = sumOfDigits.toString().includes(9) ? 'True' : 'False';

    console.log(`${number} Amazing? ${isAmazing}`);

    
}

amazingNumbers(999);
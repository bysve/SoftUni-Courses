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
// Write a function that reads an 8-bit binary number and converts it to a decimal.
// The input comes as one string element, representing a binary number.
// The output should be printed to the console.

function binaryToDecimals(binary){

    let digit = parseInt(binary, 2);
    console.log(digit);
}
binaryToDecimals('00001001');
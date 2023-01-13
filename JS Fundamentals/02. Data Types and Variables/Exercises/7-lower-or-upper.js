// Write a function that prints whether a given character is upper-case or lower-case.

function lowerOrUpper(char){

    let result = char === char.toUpperCase() ? 'upper-case' : 'lower-case';

    console.log(result);
}
lowerOrUpper('s');
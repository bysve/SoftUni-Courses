// Write a program that reverses a string and prints it on the console.

function reverseString(string){
    
    let newString = '';

    for(let i = string.length - 1; i >= 0; i--){
        newString += string[i];
    }

    console.log(newString);
}
reverseString('Hello');
reverseString('SoftUni');
reverseString('1234');
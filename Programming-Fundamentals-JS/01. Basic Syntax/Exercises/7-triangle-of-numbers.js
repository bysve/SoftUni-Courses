// Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.
// Constraints
// •	n will be in the interval [1...20].

function triangle(num){

    let output = '';
    for (let i = 1; i <= num; i++){
        for (let j = 1; j <= i; j++) {
            output += i + ' ';
        }
        console.log(output);   
        output = '';        
    }
}
triangle(3);
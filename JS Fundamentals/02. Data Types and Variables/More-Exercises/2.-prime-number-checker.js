// Write a function to check if a number is prime (only divisible by itself and one).
// The input comes as a single number argument.
// The output should be the return value of your function. Return true for prime number and false otherwise.

function primeNumberChecker(number){

    let isPrime = number == 1 ? false : true;
    for(let i = 2; i < number; i++){
        number % i == 0 ? isPrime = false : isPrime = true;
        if(!isPrime){
            break;
        }
    }
    console.log(isPrime);
}
primeNumberChecker(11);
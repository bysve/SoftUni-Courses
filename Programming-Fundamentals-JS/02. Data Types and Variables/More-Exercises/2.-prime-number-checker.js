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
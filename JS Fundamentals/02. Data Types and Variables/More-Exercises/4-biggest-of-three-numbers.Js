// Write a function that finds the biggest number.
// The input comes as 3 parameters.
// The output is the biggest of the input numbers.

function biggestOfThreeNumbers(first, second, third) {

    let biggestNumber = Math.min;
    if (first > second && first > third) {
        biggestNumber = first;
    } 
    if (second > first && second > third) {
        biggestNumber = second;
    } 
    if (third > first && third > second) {
        biggestNumber = third;
    }
    if(first == second && first == third){
        biggestNumber = first;
    }
    console.log(biggestNumber);
}
biggestOfThreeNumbers(2,
    2,
    2);
function findTheTwoSmallestNumbers(array) {

    let resultArray = array
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ');

   
    console.log(resultArray);
}

findTheTwoSmallestNumbers([30, 15, 50, 5]);
function processOddPos(arr){

    return arr.filter((_, i) => i % 2 !== 0).map(a => a * 2).reverse();
    
}

processOddPos([10, 15, 20, 25]);
processOddPos([3, 0, 10, 4, 7, 3]);
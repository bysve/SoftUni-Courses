function sumFirstAndLastEl(arr){

    let firstEl = Number(arr[0]);
    let lastEl = Number(arr[arr.length - 1]);
    let sum = firstEl + lastEl;
    
    return sum;

}

sumFirstAndLastEl(['20', '30', '40']);
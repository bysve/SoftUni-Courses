function condenseArrayToNumber(arr) {

    let condensedArr = [];

    while (arr.length > 0) {
        for (let i = 0; i < arr.length - 1; i++) {
            condensedArr[i] = arr[i] + arr[i + 1];
        }
        arr = condensedArr;
    }

    console.log(condensedArr);
}

condenseArrayToNumber([5, 0, 4, 1, 2]);
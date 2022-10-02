function maxNumber(arr) {

    let maxNumberArr = [];
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let isBigger = true;
        let numberToCompare = arr[i]
        for (let j = i + 1; j < arrLength; j++) {
            let nextNumber = arr[j];
            if (numberToCompare <= nextNumber) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            maxNumberArr.push(arr[i]);
        }
    }
    console.log(maxNumberArr.join(' '));
}
maxNumber([14, 24, 3, 19, 15, 17]);
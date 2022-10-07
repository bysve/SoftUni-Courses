function nonDecreasingSubset2(arr) {

    let newArr = [arr[0]];
    let biggestNumber = arr[0];
    arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let nextNumber = arr[i + 1];
        if (biggestNumber <= nextNumber) {
            arr.filter(nextNumber);
            biggestNumber = nextNumber;
        }
    }
    console.log(newArr.join(' '));
}
nonDecreasingSubset2([1, 3, 8, 4, 10, 12, 3, 2, 24]);
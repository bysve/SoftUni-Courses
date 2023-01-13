function magicSum(arr, magicSum) {

    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let currentNum = arr[i];
        for (let j = i + 1; j < arrLength; j++) {
            let nextNum = arr[j];

            if (currentNum + nextNum === magicSum) {
                console.log(`${currentNum} ${nextNum}`);
            }
        }
    }
}
magicSum(
    [14, 20, 60, 13, 7, 19, 8],
    27

);
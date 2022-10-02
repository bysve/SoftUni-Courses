function addAndSubtract(arr) {

    let arrSum = 0;
    let modifiedArr = [];
    let modifiedArrSum = 0;
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        arrSum += arr[i];
        let currentNum;
        if (arr[i] % 2 === 0) {
            currentNum = arr[i] + i;
        } else {
            currentNum = arr[i] - i;
        }
        modifiedArr.push(currentNum);
        modifiedArrSum += currentNum;
    }

    console.log(modifiedArr);
    console.log(arrSum);
    console.log(modifiedArrSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
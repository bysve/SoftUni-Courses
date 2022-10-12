function magicMatrices(arr) {

    let firstArr = arr[0];
    let secondArr = arr[1];
    let thirdArr = arr[2];

    let isEqualSumInRow = false;

    function sumNumberInRow(array) {
        let sumNumInRow = 0;
        for (let i = 0; i < array.length; i++) {
            sumNumInRow += array[i];
        }
        return sumNumInRow;
    }

    let firstRowSum = sumNumberInRow(firstArr);
    let secondRowSum = sumNumberInRow(secondArr);
    let thirdRowSum = sumNumberInRow(thirdArr);

    let sumNumInRow = 0;

    if (firstRowSum === secondRowSum && secondRowSum === thirdRowSum) {
        isEqualSumInRow = true;
        sumNumInRow = firstRowSum;
    }

    let isEqualSumInCol = false;

    for (let i = 0; i < firstArr.length; i++) {
        let sumInCol = firstArr[i] + secondArr[i] + thirdArr[i];
        if (sumInCol === sumNumInRow) {
            isEqualSumInCol = true;
        } else {
            isEqualSumInCol = false;
        }
    }

    if (isEqualSumInRow && isEqualSumInCol) {
        return true;
    }
    else {
        return false;
    }

}
magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);

let result = magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);
console.log(result);

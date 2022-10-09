function nonDecreasingSubset(arr) {

    // let newArr = [arr[0]];
    // let biggestNumber = arr[0];
    // arrLength = arr.length;

    // for (let i = 0; i < arrLength; i++) {
    //     let nextNumber = arr[i + 1];
    //     if (biggestNumber <= nextNumber) {
    //         newArr.push(nextNumber);
    //         biggestNumber = nextNumber;
    //     }
    // }
    // console.log(newArr.join(' '));

    let max = arr[0];
    let result = arr.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;
    });

    console.log(result.join(' '));
}
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
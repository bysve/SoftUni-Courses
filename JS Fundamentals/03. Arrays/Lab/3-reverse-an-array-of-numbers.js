function reverseArrayOnNumbers(num, arr) {

    let reversedArray = [];
    for (let i = num; i > 0; i--) {
        reversedArray.push(arr[i - 1]);
    }

    console.log(reversedArray.join(' '));
}

reverseArrayOnNumbers(3, [10, 20, 30, 40, 50])
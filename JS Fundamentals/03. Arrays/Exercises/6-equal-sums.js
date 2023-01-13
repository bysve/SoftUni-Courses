function equalSums(arr) {

    let equalSums = false;
    let arrLength = arr.length;
    if (arrLength === 1) {
        console.log(0);
    } else {
        for (let i = 1; i < arrLength; i++) {
            let leftSum = 0;
            let rightSum = 0;
            let currentNum = arr[i];
            for (let l = i - 1; l >= 0; l--) {
                leftSum += arr[l];
            }
            for (let r = i + 1; r < arrLength; r++) {
                rightSum += arr[r];
            }

            if (leftSum == rightSum) {
                console.log(i);
                equalSums = true;
            }
        }
        if(!equalSums){
            console.log('no');
        }
    }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
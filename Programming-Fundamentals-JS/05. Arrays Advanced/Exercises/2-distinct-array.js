function distinctArray(arr) {

    let resultArr = [];
    let arrLength = arr.length;

    for (let i = 0; i < arr.length; i++) {

        if (!resultArr.includes(arr[i])) {
            resultArr.push(arr[i]);
        }
    }
    console.log(resultArr.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
function sortArray(arr) {

    let resultArr = [];
    arr.sort((a, b) => a - b);
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {

        let lastEl = arr.pop();
        let firstEl = arr.shift();

        resultArr.push(lastEl);
        resultArr.push(firstEl);
    }

    console.log(resultArr.join(' '));
}

sortArray([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
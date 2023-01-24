function rotateArr(array, rotations) {

    let resultArr = array.slice();

    for (let i = 0; i < rotations; i++) {
        resultArr.unshift(resultArr.pop());
    }

    console.log(resultArr.join(' '));
}

rotateArr(['1',
    '2',
    '3',
    '4'],
    2
);
rotateArr(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
);

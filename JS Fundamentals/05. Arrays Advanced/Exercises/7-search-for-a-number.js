function searchForANumber(arr, specialNumbers) {

    let elementsToCopy = specialNumbers[0];
    let elementsToDelete = specialNumbers[1];
    let specialNum = specialNumbers[2];

    let newArr = arr.slice(0, elementsToCopy);
    newArr.splice(0, elementsToDelete);

    let counter = 0;

    for (const el of newArr) {
        if (el === specialNum) {
            counter++;
        }
    }

    console.log(`Number ${specialNum} occurs ${counter} times.`);
}

searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    );
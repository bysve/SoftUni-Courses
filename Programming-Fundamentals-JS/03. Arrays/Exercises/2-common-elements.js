function commonElements(arr1, arr2) {

    let firstArrLength = arr1.length;
    let secondArrLength = arr2.length
    for (let i = 0; i < firstArrLength; i++) {
        for (let j = 0; j < secondArrLength; j++) {
            if (arr1[i] === arr2[j]) {
                console.log(arr1[i]);
            }
        }
    }
}
commonElements(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);
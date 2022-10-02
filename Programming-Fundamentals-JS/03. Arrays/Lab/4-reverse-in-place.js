function reverseInPlace(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        let savedElement = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = savedElement;
    }

    console.log(arr.join(' '));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
function arrayRotation(arr, rotations) {

    let rotatedArr = [];
    for (let i = 0; i < rotations; i++) {
        let firstElement = arr[0];
        for (let innerI = 0; innerI < arr.length; innerI++) {
            arr[innerI] = arr[innerI + 1];
        }
        arr[arr.length - 1] = firstElement;
    }

    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);
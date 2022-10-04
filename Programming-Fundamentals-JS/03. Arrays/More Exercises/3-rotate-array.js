function rotateArray(arr) {

    let rotations = Number(arr.pop());

    for (let i = 0; i < rotations; i++) {
        let rotatedElement = arr.pop();
        arr.unshift(rotatedElement);
    }

    console.log(arr.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
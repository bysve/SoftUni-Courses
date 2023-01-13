function rotateArray(elements) {

    let rotations = Number(elements.pop());

    for (let i = 0; i < rotations; i++) {
        let rotatedElement = elements.pop();
        elements.unshift(rotatedElement);
    }

    console.log(elements.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);
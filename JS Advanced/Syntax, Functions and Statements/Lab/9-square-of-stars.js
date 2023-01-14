function squareOfStars(size) {

    let result = '';
    if (size) {

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                result += '* ';
            }
            console.log(result);
            result = '';
        }

    } else {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                result += '*';
            }
            console.log(result);
            result = '';
        }

    }
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(7);
squareOfStars();
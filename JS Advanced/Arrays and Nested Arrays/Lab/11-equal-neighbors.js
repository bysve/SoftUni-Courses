function equalNeighbors(matrix) {

    let equalCounter = 0;

    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            const element = matrix[row][col];
            const neighbour = matrix[row + 1][col];
            const nextEl = matrix[row][col + 1];

            if (element === nextEl) equalCounter++;
            if (element === neighbour) equalCounter++;

            if (row == matrix.length - 2 && matrix[row + 1][col] == matrix[row + 1][col + 1]) {
                equalCounter++;
            }
        }
    }

    // for (let row = 0; row < matrix.length; row++) {
    //     for (let col = 0; col < matrix[row].length; col++) {
    //         const element = matrix[row][col];
    //         const nextEl = matrix[row][col + 1];

    //         if (element === nextEl) equalCounter++;
    //     }
    // }

    console.log(equalCounter);
}

equalNeighbors([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]])
equalNeighbors(
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);
equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
);
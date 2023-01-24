function sumDiagonal(matrix) {

    let sumMain = 0;
    let sumSec = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumMain += matrix[i][i];
    }

    matrix.reverse();

    for (let i = 0; i < matrix.length; i++) {
        sumSec += matrix[i][i];
    }


    

    console.log(`${sumMain} ${sumSec}`);
}

sumDiagonal([[20, 40],
[10, 60]]
);
sumDiagonal([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
);
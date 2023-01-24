function solve(matrix) {

    let sumRow = 0;
    let sumCol = 0;

    for (let row = 0; row < matrix.length; row++) {
        let currentRow = matrix[row];
        for (let col = 0; col < currentRow.length; col++) {
            
            sumCol += Number(currentRow[col]);
            sumRow += Number(currentRow[0]);
            
        }
        
    }

    if(sumCol == sumRow){
        console.log('true');
    } else {
        console.log('false');
    }
}

solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);
solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
);
solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
);
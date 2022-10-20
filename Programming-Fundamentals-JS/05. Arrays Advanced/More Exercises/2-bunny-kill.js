function bunnyKill(arr) {

    let bombCells = arr.pop().split(' ').map(x => x.split(',').map(x => Number(x)));
    let matrix = arr.map(row => row.split(' ').map(x => Number(x)));

    let killsCount = 0;
    let bunniesDamage = 0;

    for (let i = 0; i < bombCells.length; i++) {

        let bombRow = bombCells[i][0];
        let bombCol = bombCells[i][1];
        let bombDamage = matrix[bombRow][bombCol];

        if (bombDamage <= 0) {
            continue;
        }

        let startRow = Math.max(bombRow - 1, 0);
        let endRow = Math.min(bombRow + 1, arr.length - 1);

        for (let row = startRow; row <= endRow; row++) {

            let startCol = Math.max(bombCol - 1, 0);
            let endCol = Math.min(bombCol + 1, arr[row].length - 1);

            for (let col = startCol; col <= endCol; col++) {

                matrix[row][col] -= bombDamage;
            }
        }
        bunniesDamage += bombDamage;
        killsCount++;
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > 0) {
                bunniesDamage += matrix[row][col];
                killsCount++;
            }
        }
    }

    console.log(bunniesDamage);
    console.log(killsCount);
}


bunnyKill(
    ['10 10 10',
    '10 10 10', 
    '10 10 10',
    '0,0']
    );
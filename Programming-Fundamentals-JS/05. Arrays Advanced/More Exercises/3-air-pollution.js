function airPollution(arrOfNums, forces) {

    let mapOfSofia = arrOfNums.map(row => row.split(' ').map(x => Number(x)));
    let arrayLength = forces.length;

    let pollutedArea = [];

    for (let i = 0; i < arrayLength; i++) {
        let currentForce = forces[i].split(' ');
        let forceType = currentForce[0];
        let forceIndex = Number(currentForce[1]);

        switch (forceType) {
            case 'breeze':

                for (let i = 0; i < mapOfSofia[forceIndex].length; i++) {
                    //polluted particles in a block cannot go below zero!!!
                    mapOfSofia[forceIndex][i] = Math.max(0, mapOfSofia[forceIndex][i] - 15);
                }
                break;
            case 'gale':

                for (let i = 0; i < mapOfSofia.length; i++) {
                    mapOfSofia[i][forceIndex] = Math.max(0, mapOfSofia[i][forceIndex] - 20);
                }
                break;
            case 'smog':

                for (let row = 0; row < mapOfSofia.length; row++) {
                    for (let col = 0; col < mapOfSofia[row].length; col++) {
                        mapOfSofia[row][col] += forceIndex;
                    }
                }
                break;
        }
    }

    for (let row = 0; row < mapOfSofia.length; row++) {
        for (let col = 0; col < mapOfSofia[row].length; col++) {

            if (mapOfSofia[row][col] >= 50) {
                pollutedArea.push(`[${row}-${col}]`)
            }

        }
    }

    if (pollutedArea.length > 0) {
        console.log(`Polluted areas: ${pollutedArea.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}

airPollution(['5 7 2 14 4',
    '21 14 2 5 3',
    '3 16 7 42 12',
    '2 20 8 39 14',
    '7 34 1 10 24'],
    ['breeze 1', 'gale 2']
);
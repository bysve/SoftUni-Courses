function thePianist(input) {

    let number = Number(input.shift());
    let pieces = {};

    let line = input.shift();

    for (let i = 0; i < number; i++) {

        let [piece, composer, key] = line.split('|');

        pieces[piece] = {
            'composer': composer,
            'key': key,
        }

        line = input.shift();
    }

    while (line !== 'Stop') {

        let commandData = line.split('|');
        let command = commandData.shift();
        let piece = commandData.shift();

        switch (command) {
            case 'Add':
                let composer = commandData[0];
                let key = commandData[1];

                if (pieces.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    pieces[piece] = {
                        'composer': composer,
                        'key': key,
                    }

                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                }
                break;
            case 'Remove':

                if (pieces.hasOwnProperty(piece)) {
                    console.log(`Successfully removed ${piece}!`);
                    delete pieces[piece];
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }

                break;
            case 'ChangeKey':
                let newKey = commandData[0];

                if (pieces.hasOwnProperty(piece)) {

                    pieces[piece]['key'] = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`);

                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
        }

        line = input.shift();
    }

    for (const piece in pieces) {

        console.log(`${piece} -> Composer: ${pieces[piece]['composer']}, Key: ${pieces[piece]['key']}`);
    }

}

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);
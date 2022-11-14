function partyTime(input) {

    let vipList = [];
    let regularList = [];

    let currentLine = input.shift();

    while (currentLine !== 'PARTY') {

        let isVip = isNaN(currentLine[0]);

        if (isVip) {
            regularList.push(currentLine);
        } else {
            vipList.push(currentLine)
        }
        currentLine = input.shift();
    }

    let allGuests = vipList.concat(regularList);

    for (const guest of input) {
        if (allGuests.includes(guest)) {
            allGuests.splice(allGuests.indexOf(guest), 1);
        }
    }

    console.log(allGuests.length);
    console.log(allGuests.join('\n'));
}

partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);
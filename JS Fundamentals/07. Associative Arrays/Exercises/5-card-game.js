function cardGame(input) {

    let playersObj = {};

    let cardPowerObj = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    }

    let cardTypeObj = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1,
    }

    input.forEach(line => {
        let [name, cards] = line.split(': ');
        let cardsArr = cards.split(', ');

        if (!playersObj.hasOwnProperty(name)) {
            playersObj[name] = cardsArr;
        } else {
            playersObj[name] = playersObj[name].concat(cardsArr);
        }
    });

    let entries = Object.entries(playersObj);

    entries.forEach(entry => {
        let name = entry[0];
        let cards = new Set(entry[1]);
        let cardsValue = 0;

        cards.forEach(card => {
            if (card.length === 2) {
                let cardPower = card[0];
                let cardType = card[1];
                let currentCardValue = cardPowerObj[cardPower] * cardTypeObj[cardType];
                cardsValue += currentCardValue;
            }
            if (card.length === 3) {
                let cardPower = Number(card[0] + card[1]);
                let cardType = card[2];
                let currentCardValue = cardPowerObj[cardPower] * cardTypeObj[cardType];
                cardsValue += currentCardValue;
            }
        });

        console.log(`${name}: ${cardsValue}`);
    });
}

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]
);
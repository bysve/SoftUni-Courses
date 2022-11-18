function cardGame(input) {

    let playerData = {};

    for (const line of input) {
        let [namePlayer, cards] = line.split(': ');
        let cardsArr = cards.split(', ');
        if (!playerData.hasOwnProperty(namePlayer)) {
            playerData[namePlayer] = [];
        }

    }

    console.log(...playerData);
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
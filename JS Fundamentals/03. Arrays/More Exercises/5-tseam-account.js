function tseamAccount(input) {
    let games = input[0].split(' ');
    let inputLength = input.length;

    for (let i = 1; i < inputLength; i++) {
        let currentElement = input[i].split(' ');
        let command = currentElement[0];
        let newGame = currentElement[1];

        switch (command) {
            case 'Play!':
                break;
            case 'Install':
                if (games.includes(newGame) === false) {
                    games.push(newGame);
                }
                break;
            case 'Uninstall':
                if (games.includes(newGame)) {
                    let index = games.indexOf(newGame);
                    games.splice(index, 1);
                }
                break;
            case 'Update':
                if (games.includes(newGame)) {
                    let index = games.indexOf(newGame);
                    games.splice(index, 1);
                    games.push(newGame);
                }
                break;
            case 'Expansion':
                let expandedGame = newGame.split('-');
                let gameToExpand = expandedGame[0];
                if (games.includes(gameToExpand)) {
                    let index = games.indexOf(gameToExpand);
                    games.splice(index + 1, 0, expandedGame.join(':'))
                }
                break;
        }
    }

    console.log(games.join(' '));
}

tseamAccount(
    ['CS WoW Diablo',
        'Install LoL',
        'Uninstall WoW',
        'Update Diablo',
        'Expansion CS-Go',
        'Play!']
)
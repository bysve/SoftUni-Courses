function chessBoard(arg) {
    let size = Number(arg);
    let currentColour = 'black';
    let previousColour = '';
    console.log('<div class="chessboard">');

    for (let rows = 1; rows <= arg; rows++) {
        console.log('  <div>');

        for (let cols = 1; cols <= arg; cols++) {
            console.log(`    <span class="${currentColour}"></span>`);

            previousColour = currentColour;
            currentColour = previousColour === 'black' ? 'white' : 'black';

        }

        console.log('  </div>')
        if (arg % 2 === 0) {
            previousColour = currentColour;
            currentColour = previousColour === 'black' ? 'white' : 'black';
        }
    }
    console.log('</div>')
}
chessBoard(3);
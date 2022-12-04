function mirrorWords(input) {

    let string = input.shift();
    let pattern = /([@|#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;

    let validPairs = 0;
    let mirrorWords = [];

    let match = pattern.exec(string);

    while (match) {
        validPairs++;
        let wordOneArr = Array.from(match.groups.wordOne);
        let wordTwoArr = Array.from(match.groups.wordTwo);
        let reversedWordOneArr = wordOneArr.reverse();

        if (reversedWordOneArr.join('') === wordTwoArr.join('')) {
            mirrorWords.push(`${match.groups.wordOne} <=> ${match.groups.wordTwo}`);
        }

        match = pattern.exec(string);
    }

    if (validPairs === 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${validPairs} word pairs found!`);
    }
    if (mirrorWords.length < 1) {
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        console.log(mirrorWords.join(', '));
    }

}
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
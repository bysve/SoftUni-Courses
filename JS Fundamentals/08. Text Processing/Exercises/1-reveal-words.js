function revealWords(words, text) {

    let wordsArr = words.split(', ');
    let textArr = text.split(' ');
    let result = text;

    wordsArr.forEach(word => {
        for (const el of textArr) {
            if (el.includes('*') && el.length === word.length) {
                result = result.replace(el, word)
            }
        }
    });

    console.log(result);
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);
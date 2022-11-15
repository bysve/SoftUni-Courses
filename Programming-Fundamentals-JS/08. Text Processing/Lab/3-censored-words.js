function censoredWords(text, word) {

    let textArr = text.split(' ');

    let result = text;
    while (result.includes(word)) {

        let replaced = '*'.repeat(word.length);
        result = result.replace(word, replaced);
    }

    console.log(result);
}

censoredWords('A small sentence with some words', 'small')
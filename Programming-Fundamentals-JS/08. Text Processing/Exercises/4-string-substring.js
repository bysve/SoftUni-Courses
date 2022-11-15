function stringSubstring(word, string) {

    let lowerString = string.toLowerCase();
    let stringArr = lowerString.split(' ');
    let wordFound = false;

    stringArr.forEach(el => {
        if (el === word) {
            wordFound = true;
        }
    });

    if (wordFound) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('python',
    'JavaScript is the best programming language');
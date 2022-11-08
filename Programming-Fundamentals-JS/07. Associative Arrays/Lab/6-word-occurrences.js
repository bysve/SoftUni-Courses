function wordsCounter(input) {

    let wordsObj = {};

    input.forEach(word => {
        if (!wordsObj.hasOwnProperty(word)) {
            wordsObj[word] = 1;
        } else {
            wordsObj[word]++;
        }
    });

    let entries = Object.entries(wordsObj);
    let sorted = entries.sort((a, b) => b[1] - a[1]);

    for (const [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
}

wordsCounter(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]);
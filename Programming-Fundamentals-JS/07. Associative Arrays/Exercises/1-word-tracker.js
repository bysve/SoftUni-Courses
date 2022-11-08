function wordTracker(input) {

    let searchedWords = input.shift().split(' ');
    let result = {};

    searchedWords.forEach(word => {
        result[word] = 0;
    });

    input.forEach(word => {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    });

    let entries = Object.entries(result);
    let sorted = entries.sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);

    sorted.forEach(line => console.log(`${line[0]} - ${line[1]}`));
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you',
    'have', 'to', 'count', 'the',
    'occurrences', 'of', 'the', 'words',
    'this', 'and', 'sentence', 'because',
    'this', 'is', 'your', 'task'
]);
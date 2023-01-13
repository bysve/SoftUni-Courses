function lastNumberSequence(length, kElements) {

    // •	The first element is 1.
    // •	Every following element equals the sum of the previous k elements.
    // •	The length of the sequence is n elements.

    let resultSequence = [1];

    for (let i = 1; i < length; i++) {
        let index = Math.max(resultSequence.length - kElements, 0)

        let lastElements = resultSequence.slice(index);
        let sum = 0;
        for (const el of lastElements) {
            sum += el;
        }

        resultSequence.push(sum);
    }

    console.log(resultSequence.join(' '));
}

lastNumberSequence(6, 3);
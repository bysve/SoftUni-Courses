function emojiDetector(input) {

    let string = input.shift();

    let digitPattern = /\d/g;
    let allDigits = string.match(digitPattern);
    let coolThreshold = 1;

    for (const digit of allDigits) {
        let number = Number(digit);
        coolThreshold *= number;
    }

    let emojiPattern = /(:{2}|\*{2})(?<word>[A-Z][a-z]{2,})\1/g;

    let emojis = string.matchAll(emojiPattern);
    let coolEmojis = [];
    let counter = 0;

    for (const emoji of emojis) {

        counter++;
        let coolness = 0;
        let currentWord = emoji.groups.word;
        let wordLength = currentWord.length;

        for (let i = 0; i < wordLength; i++) {
            coolness += currentWord.charCodeAt(i);
        }

        if (coolness >= coolThreshold) {
            coolEmojis.push(emoji[0])
        }
    }

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    if (coolEmojis.length > 0) { console.log(coolEmojis.join('\n')); }
}

emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);
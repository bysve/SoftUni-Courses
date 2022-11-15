function hashTag(string) {

    const arr = string.split(' ');
    let words = [];

    for (const word of arr) {
        if (word.startsWith('#') && word.length > 1) {
            let isValid = true;
            for (let index = 1; index < word.length; index++) {
                let lower = word.toLowerCase();
                let currentLetter = lower[index];
                if (currentLetter.charCodeAt() < 97 || currentLetter.charCodeAt() > 122) {
                    isValid = false;
                }
            }
            if (isValid) {
                let newWord = word.substring(1);
                words.push(newWord)
            }
        }
    }

    console.log(words.join('\n'));
}

hashTag('The symbol # is known #variously in English-speaking #123regions as the #number sign');
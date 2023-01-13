function replaceRepeatingChars(string) {

    let result = [string[0]];

    for (let index = 1; index < string.length; index++) {
        if (string[index] !== string[index - 1]) {
            result.push(string[index]);
        }
    }

    console.log(result.join(''));
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
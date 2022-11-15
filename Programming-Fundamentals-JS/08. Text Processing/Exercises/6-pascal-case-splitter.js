function pascalCaseSplitter(string) {

    let lowerCaseStr = string.toLowerCase();
    result = string[0];

    for (let index = 1; index < string.length; index++) {
        if (string[index] !== lowerCaseStr[index]) {
            result += ', '
        }
        result += string[index]
    }

    console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
function charactersInRange(charOne, charTwo) {

    let charOneCode = charOne.charCodeAt();
    let charTwoCode = charTwo.charCodeAt();

    let startCode = Math.min(charOneCode, charTwoCode);
    let endCode = Math.max(charOneCode, charTwoCode);

    let charArr = [];

    for (let i = startCode + 1; i < endCode; i++) {
        let currentChar = String.fromCharCode(i);
        charArr.push(currentChar);
    }
    console.log(charArr.join(' '));
}

charactersInRange('#',
':'
);
// Write a program that receives a string of number n and print all triples of the first n small Latin letters, ordered alphabetically:
// Example
// Input   Output
// 2	aaa
//      aab
//      aba
//      abb
//      baa
//      bab
//      bba
//      bbb

function triplesOfLatinLetters(numAsString) {

    let num = Number(numAsString);
    let firstLetter = '';
    let secondLetter = '';
    let thirdLetter = '';
    let lastLetter = 97 + num;


    for (let i = 97; i < lastLetter; i++) {
        firstLetter = String.fromCharCode(i);

        for (j = 97; j < lastLetter; j++) {
            secondLetter = String.fromCharCode(j);

            for (let k = 97; k < lastLetter; k++) {
                thirdLetter = String.fromCharCode(k);
                console.log(firstLetter + secondLetter + thirdLetter);
            }
        }
    }
}
triplesOfLatinLetters('2');
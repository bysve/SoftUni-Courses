function printNthElement(elements) {

    let nStep = Number(elements[elements.length - 1]);

    let resultArr = [];

    for (let i = 0; i < elements.length - 1; i += nStep) {
        resultArr.push(elements[i]);
    }
    console.log(resultArr.join(' '));
}
printNthElement(['1', '2', '3', '4', '5', '6']);
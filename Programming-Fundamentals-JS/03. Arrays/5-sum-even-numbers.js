function sumEvenNumber(arr) {

    let sumEvenNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        let number = Number(arr[i]);
        if (number % 2 == 0) {
            sumEvenNumber += number;
        }
    }

    console.log(sumEvenNumber);

}
sumEvenNumber(['1', '2', '3', '4', '5', '6']);
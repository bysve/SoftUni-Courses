function numberModification(modifiedNum) {

    function getSum(number) {
        let numAsString = number.toString();
        let sum = 0;

        for (let i = 0; i < numAsString.length; i++) {
            sum += Number(numAsString[i]);
        }

        return sum;
    }

    function getAverage(num) {
        return getSum(num) / num.toString().length;
    }

    while (getAverage(modifiedNum) < 5) {
        modifiedNum += '9';
    }

    console.log(modifiedNum);
}
numberModification(101);
function aggregateElements(arr) {

    let result = 0;

    function sum() {
        for (const el of arr) {
            result += el;
        }
        console.log(result);
        result = 0;
    }
    sum();

    function sumInverseValues() {
        for (const el of arr) {
            result += 1 / el;
        }
        console.log(result);
        result = 0;
    }
    sumInverseValues();

    function concat() {
        result = ''
        for (const el of arr) {
            result += el;
        }
        console.log(result);
        result = 0;
    }
    concat();
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);

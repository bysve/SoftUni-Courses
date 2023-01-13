function oddOccurences(input) {

    let elements = input.split(' ');
    let result = {};

    for (const el of elements) {

        let element = el.toLowerCase();
        if (!result.hasOwnProperty(element)) {
            result[element] = 1;
        } else {
            result[element]++;
        }
    }

    let resultArr = []
    let entries = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (const entry of entries) {

        if (entry[1] % 2 !== 0) {
            resultArr.push(entry[0]);
        }
    }

    console.log(...resultArr);
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
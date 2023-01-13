function maxSequence(arr) {

    let maxSequenceArr = [];
    let currentArr = [];
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let currentNum = arr[i];
        let nextNum = arr[i + 1];
       
        if (currentNum === nextNum) {
            currentArr.push(currentNum);
        } else {
            currentArr.push(currentNum); 
            if (currentArr.length > maxSequenceArr.length) {
                maxSequenceArr = currentArr;
            }
            currentArr = [];
        }
    }
    console.log(maxSequenceArr.join(' '));
}
maxSequence([4, 4, 4, 4]);
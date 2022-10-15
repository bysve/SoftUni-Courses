function firstAndLast(arr) {

    let kNumber = arr.shift();
    let firstElArr = arr.slice(0, kNumber);
    let lastElArr = arr.slice(arr.length - kNumber);

    console.log(firstElArr.join(' '));
    console.log(lastElArr.join(' '));

}

firstAndLast([3,
    6, 7, 8, 9]
);
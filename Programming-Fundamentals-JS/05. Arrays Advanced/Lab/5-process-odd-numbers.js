function oddNumberProcessor(arr) {

    let resultArray = arr
        .filter((x, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join(' ');


    console.log(resultArray);
}

oddNumberProcessor([10, 15, 20, 25]);
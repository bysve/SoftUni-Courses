function cutAndReverse(string) {

    const middle = string.length / 2;

    const firstPart = string
        .substring(0, middle)
        .split('')
        .reverse()
        .join('');

    const secondPart = string
        .substring(middle)
        .split('')
        .reverse()
        .join('');

    console.log(firstPart);
    console.log(secondPart);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
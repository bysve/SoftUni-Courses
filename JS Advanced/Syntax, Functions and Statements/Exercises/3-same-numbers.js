function sameNums(num) {

    const numAsString = num.toString();
    let isSame = true;

    let firstNum = numAsString[0];
    let sum = Number(firstNum);

    for (let i = 1; i < numAsString.length; i++) {
        if (numAsString[i] != firstNum) {
            isSame = false;
        }
        sum += Number(numAsString[i]);

    }

    if (isSame) {
        console.log(isSame);
    }
    else {
        console.log(isSame);
    }
    console.log(sum);
}

sameNums(2222222);
sameNums(1234);
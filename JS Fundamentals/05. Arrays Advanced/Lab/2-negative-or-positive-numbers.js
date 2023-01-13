function negativeOrPositive(arr) {

    let modifiedArr = [];

    for (let el of arr) {
        let num = Number(el);
        if (num < 0) {
            modifiedArr.unshift(el);
        } else {
            modifiedArr.push(el);
        }
    }

    console.log(modifiedArr.join('\n'));
}

negativeOrPositive(['7', '-2', '8', '9']);
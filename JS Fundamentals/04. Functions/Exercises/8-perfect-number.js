function perfectNumber(number) {

    let isPerfect = false;
    let properDivisorSum = 0;

    let isPerfectNum = () => {
        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                properDivisorSum += i;
            }
        }
        if (properDivisorSum === number) {
            isPerfect = true;
        }

        return isPerfect;
    }

    if (isPerfectNum()) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}

perfectNumber(1236498);
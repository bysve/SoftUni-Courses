function loadingBar(percent) {

    let symbolCount = percent / 10;
    let dotCount = 10 - symbolCount;

    if (percent === 100) {
        console.log('100% Complete!');
        console.log(`${percent}% [${'%'.repeat(symbolCount)}]`);
    } else {
        console.log(`${percent}% [${'%'.repeat(symbolCount)}${'.'.repeat(dotCount)}]`);
        console.log('Still loading...');
    }
}

loadingBar(100);

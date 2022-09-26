function spiceMustFlow(startingYield) {

    let totalYield = 0;
    let days = 0;

    while (startingYield >= 100) {
        totalYield += startingYield - 26;
        days++;
        startingYield -= 10;
    }
    let remainingYield = totalYield - 26;
    if (remainingYield < 0) {
        remainingYield = 0;
    }
    console.log(days);
    console.log(remainingYield);

}
spiceMustFlow(450);
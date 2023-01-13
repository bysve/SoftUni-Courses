// Write a function that converts British pounds to dollars formatted to the 3rd decimal point. 
// •	1 British Pound = 1.31 Dollars

function poundsToDOllars(poundsAmount){

    const dollarsPerPound = 1.31;
    let dollarsAmount = poundsAmount * dollarsPerPound;
    console.log(dollarsAmount.toFixed(3));

}
poundsToDOllars(80);
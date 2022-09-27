function poundsToDOllars(poundsAmount){

    const dollarsPerPound = 1.31;
    let dollarsAmount = poundsAmount * dollarsPerPound;
    console.log(dollarsAmount.toFixed(3));

}
poundsToDOllars(80);
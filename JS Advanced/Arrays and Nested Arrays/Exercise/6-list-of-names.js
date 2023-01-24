function solve(array) {

     console.log(array.sort((a, b) => a.localeCompare(b)).map((el, i) => `${i + 1}.${el}`).join('\n'));
   
}

solve(["John", "Bob", "Christina", "Ema"]);

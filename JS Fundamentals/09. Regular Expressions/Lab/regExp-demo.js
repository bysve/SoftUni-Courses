let pattern = /\b([A-Z][a-z]{2})\b/g;
let pattern1 = /\s+/g;

let regExp = new RegExp('\d{2}-\w{3}-\d{4}', 'g');

let text = 'Far: 1 concluded not his something extremity. Want four we face an he gate. On he of played he ladies answer little though nature. Blessing oh do pleasure as so formerly. Took four spot soon led size you. Outlived it received he material. Him: 123 yourself joy moderate off repeated laughter outweigh screened. 01-Sep-1985';

let text1 = '1    2  3 4'

let first = text.split(pattern);

let second = text1.split(pattern1);
console.log(second);



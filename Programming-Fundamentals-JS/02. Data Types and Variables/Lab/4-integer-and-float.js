// You will receive 3 numbers. Your task is to find their sum and print result to the console in the following format:
// `{sum} - {type of the number (Integer or Float)}`

function intAndFloat(first, second, third){
    let sum = first + second + third;
    let sumType = sum % 1 === 0 ? 'Integer' : 'Float';
    
    console.log(`${sum} - ${sumType}`);
}

intAndFloat(100, 200, 303);
function intAndFloat(first, second, third){
    let sum = first + second + third;
    let sumType = sum % 1 === 0 ? 'Integer' : 'Float';
    
    console.log(`${sum} - ${sumType}`);
}

intAndFloat(100, 200, 303);
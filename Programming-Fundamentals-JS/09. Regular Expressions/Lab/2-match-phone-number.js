function matchPhoneNumber(input){

    let string = input.shift();
    
    let regExp = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    let result = regExp.exec(string);

    let matchArray = [];
   
    while (result){

        matchArray.push(result[0]);

        result = regExp.exec(string);
    }

    console.log(matchArray.join(', '));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);
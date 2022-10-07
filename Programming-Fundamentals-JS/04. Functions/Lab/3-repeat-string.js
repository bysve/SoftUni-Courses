function repeatString(string, count) {

    let newString = '';
    for (let i = 0; i < count; i++){
        newString += string;
    }

    return newString;
}

repeatString("abc", 3);
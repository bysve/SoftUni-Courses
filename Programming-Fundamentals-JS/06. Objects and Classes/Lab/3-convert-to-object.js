function JSONtoObject(string) {

    let convertedString = JSON.parse(string);
    let entries = Object.entries(convertedString);

    for (const key of Object.keys(convertedString)) {

        console.log(`${key}: ${convertedString[key]}`);

    }
}

JSONtoObject('{"name": "George", "age": 40, "town": "Sofia"}');
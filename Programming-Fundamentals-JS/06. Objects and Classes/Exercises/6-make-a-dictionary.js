function dictionary(arr) {

    let copy = [];
    let dictionary = {};

    for (const line of arr) {

        let converted = JSON.parse(line);

        for (const key in converted) {

            dictionary[key] = converted[key];
        }
    }

    for (const key in dictionary) {
        copy.push(`Term: ${key} => Definition: ${dictionary[key]}`);
    }

    console.log(copy.sort().join('\n'));

}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);
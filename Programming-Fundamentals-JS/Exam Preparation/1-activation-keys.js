function activationKey(input) {

    let activationKey = input.shift();

    let line = input.shift();

    while (line !== 'Generate') {

        let commandData = line.split('>>>');
        let command = commandData[0];

        switch (command) {
            case 'Contains':
                let searchedString = commandData[1];

                if (activationKey.includes(searchedString)) {
                    console.log(`${activationKey} contains ${searchedString}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;
            case 'Flip':
                let upperOrLowerCase = commandData[1];
                let startIndex = Number(commandData[2]);
                let endIndex = Number(commandData[3]);
                let substring = activationKey.substring(startIndex, endIndex);
                let newSubstring = '';

                if (upperOrLowerCase === 'Upper') {
                    newSubstring = substring.toUpperCase();
                } else if (upperOrLowerCase === 'Lower') {
                    newSubstring = substring.toLowerCase();
                }

                //let newSubstring = upperOrLowerCase == 'Upper' ? substring.toUpperCase() : substring.toLowerCase();
                activationKey = activationKey.replace(substring, newSubstring);
                console.log(activationKey);
                break;
            case 'Slice':
                let start = Number(commandData[1]);
                let end = Number(commandData[2]);
                let stringToSlice = activationKey.slice(start, end);
                activationKey = activationKey.replace(stringToSlice, '');
                console.log(activationKey);
                break;
        }
        line = input.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}

activationKey(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);
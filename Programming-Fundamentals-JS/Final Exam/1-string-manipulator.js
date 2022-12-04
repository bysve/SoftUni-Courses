function stringManilupator(input) {

    let string = input.shift();

    let line = input.shift();

    while (line !== 'End') {

        let commandData = line.split(' ');
        let command = commandData.shift();

        switch (command) {
            case 'Translate':
                let charToReplace = commandData[0];
                let replacement = commandData[1];

                while (string.includes(charToReplace)) {
                    string = string.replace(charToReplace, replacement);
                }

                console.log(string);
                break;
            case 'Includes':
                let searchedString = commandData[0];

                if (string.includes(searchedString)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Start':
                let startingString = commandData[0];

                if (string.startsWith(startingString)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Lowercase':
                string = string.toLowerCase();
                console.log(string);
                break;
            case 'FindIndex':
                let char = commandData[0];
                let lastIndex = string.lastIndexOf(char);
                console.log(lastIndex);
                break;
            case 'Remove':
                let startIndex = Number(commandData[0]);
                let count = Number(commandData[1]);
                let stringToArray = string.split('');
                stringToArray = stringToArray.splice(startIndex, count);
                let stringToRemove = stringToArray.join('');
                string = string.replace(stringToRemove, '');
                console.log(string);
                break;
        }
        line = input.shift();
    }
}

stringManilupator(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])

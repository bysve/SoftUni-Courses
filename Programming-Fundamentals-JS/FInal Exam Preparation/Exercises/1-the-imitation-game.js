function imitationGame(input) {

    let message = input.shift();
    let result = message;

    let line = input.shift();

    while (line !== 'Decode') {

        let commandLine = line.split('|');
        let command = commandLine.shift();

        switch (command) {
            case 'Move':
                let lettersNum = Number(commandLine[0]);
                let substring = result.substring(0, lettersNum);
                result = result.replace(substring, '').concat(substring);
                break;
            case 'Insert':
                let index = Number(commandLine[0]);
                let value = commandLine[1];
                let messageArr = result.split('');
                messageArr.splice(index, 0, value);
                result = messageArr.join('');
                break;
            case 'ChangeAll':
                let susbstr = commandLine[0];
                let replacement = commandLine[1];
                while (result.includes(susbstr)) {
                    result = result.replace(susbstr, replacement);
                }
                break;
        }

        line = input.shift();
    }

    console.log(`The decrypted message is: ${result}`);
}

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]
  );
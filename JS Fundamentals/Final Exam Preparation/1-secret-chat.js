function secretChat(input) {

    let message = input.shift();

    let line = input.shift();

    while (line !== 'Reveal') {

        let lineData = line.split(':|:');
        let command = lineData.shift();

        switch (command) {
            case 'InsertSpace':
                let index = Number(lineData[0]);
                let messageArray = message.split('');
                messageArray.splice(index, 0, ' ');
                message = messageArray.join('');
                console.log(message);
                break;
            case 'Reverse':
                let substring = lineData[0];
                if (message.includes(substring)) {
                    let reversed = Array.from(substring).reverse().join('');

                    message = message.replace(substring, '').concat(reversed);
                    console.log(message);
                } else {
                    console.log('error');
                }
                break;
            case 'ChangeAll':
                let stringToReplace = lineData[0];
                let replacement = lineData[1];
                let pattern = new RegExp(stringToReplace, 'g');
                message = message.replace(pattern, replacement);
                console.log(message);
                break;
        }
        line = input.shift();
    }

    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);
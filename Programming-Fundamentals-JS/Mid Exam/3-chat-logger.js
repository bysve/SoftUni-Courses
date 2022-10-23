function chatLogger(args) {

    let currentLine = args.shift();
    let chat = [];

    while (currentLine !== 'end') {
        let lineArray = currentLine.split(' ');
        let command = lineArray[0];
        let message = lineArray[1];

        switch (command) {
            case 'Chat':
                chat.push(message);
                break;
            case 'Delete':
                if (chat.includes(message)) {
                    let messageIndex = chat.indexOf(message);
                    chat.splice(messageIndex, 1);
                }
                break;
            case 'Edit':
                let editedMeesage = lineArray[2];
                if (chat.includes(message)) {
                    let messageIndex = chat.indexOf(message);
                    chat.splice(messageIndex, 1, editedMeesage);
                }
                break;
            case 'Pin':
                if (chat.includes(message)) {
                    let messageIndex = chat.indexOf(message);
                    let movedMessage = chat.splice(messageIndex, 1);
                    chat.push(movedMessage.toString());
                }
                break;
            case 'Spam':
                for (let spam = 1; spam < lineArray.length; spam++) {
                    chat.push(lineArray[spam]);
                }
                break;
        }
        currentLine = args.shift();
    }

    console.log(chat.join('\n'));
}

chatLogger(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])
;
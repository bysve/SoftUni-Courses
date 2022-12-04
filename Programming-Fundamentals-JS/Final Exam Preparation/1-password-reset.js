function passwordReset(input) {

    let newPass = input.shift();
    let bufferPass = '';

    let line = input.shift();

    while (line !== 'Done') {

        let commandData = line.split(' ');
        let command = commandData.shift();

        switch (command) {
            case 'TakeOdd':
                for (let i = 1; i < newPass.length; i += 2) {

                    bufferPass += newPass[i];
                }

                newPass = bufferPass;
                bufferPass = '';
                console.log(newPass);
                break;
            case 'Cut':
                let index = Number(commandData[0]);
                let length = Number(commandData[1]);

                let stringToCut = newPass.substring(index, index + length);
                newPass = newPass.replace(stringToCut, '');

                console.log(newPass);
                break;
            case 'Substitute':
                let substring = commandData[0];
                let substitute = commandData[1];

                if (newPass.includes(substring)) {
                    //let pattern = new RegExp(substring, 'g');
                    while (newPass.includes(substring)) {
                        newPass = newPass.replace(substring, substitute);
                    }
                    console.log(newPass);
                } else {
                    console.log('Nothing to replace!');
                }
                break;
        }
        line = input.shift();
    }
    console.log(`Your password is: ${newPass}`);
}

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);
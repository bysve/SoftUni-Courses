function encryptionPassword(input) {

    let linesNumber = Number(input.shift());

    let passPattern = /([[A-Z]|[a-z]|[\W]|[\d]|[\s]]+)>(?<number>\d{3})\|(?<lowerCase>[a-z]{3})\|(?<upperCase>[A-Z]{3})\|(?<symbols>[^<>]{3})<\1/gm;

    let line = input.shift();

    for (let i = 0; i < linesNumber; i++) {

        let passCheck = passPattern.exec(line);

        if (passCheck) {

            while (passCheck) {

                let numbers = passCheck.groups.number;
                let lowerCases = passCheck.groups.lowerCase;
                let upperCases = passCheck.groups.upperCase;
                let symbols = passCheck.groups.symbols;

                let validPass = ''.concat(numbers, lowerCases, upperCases, symbols);

                console.log(`Password: ${validPass}`);
                passCheck = passPattern.exec(line);
            }
        } else {
            console.log('Try another password!');
        }

        line = input.shift();
    }
}
encryptionPassword(["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"])



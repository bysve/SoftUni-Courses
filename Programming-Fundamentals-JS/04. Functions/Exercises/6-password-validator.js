function passwordValidator(password) {

    let passwordLength = password.length;
    let lengthOk = false;
    let lengthChecker = checkLength();
    if (lengthOk) {
        console.log(lengthChecker);
    }

    function checkLength() {
        if (passwordLength < 6 || passwordLength > 10) {
            lengthOk = true;
            return 'Password must be between 6 and 10 characters';
        }
    }

    let digitCount = 0;
    let isSymbol = false;

    function checkForSymbol() {
        for (let index = 0; index < passwordLength; index++) {

            let currentChar = password[index];
            let currentCharCode = currentChar.charCodeAt();

            if ((currentCharCode >= 65 && currentCharCode <= 90) ||
                (currentCharCode >= 97 && currentCharCode <= 122) ||
                (currentCharCode >= 48 && currentCharCode <= 57)) {

                if (currentCharCode >= 48 && currentCharCode <= 57) {
                    digitCount++;
                }
            } else {
                isSymbol = true;
            }
        }
        return isSymbol;
    }

    checkForSymbol();
    if (isSymbol) {
        console.log('Password must consist only of letters and digits');
    }
    if (digitCount < 2) {
        console.log('Password must have at least 2 digits');
    }
    if (!isSymbol && digitCount >= 2) {
        console.log('Password is valid');
    }
}

passwordValidator('Pa$s$s');
function palindrimIntegers(array) {

    let arrayLength = array.length;
    let isPalindrim = false;

    for (let i = 0; i < arrayLength; i++) {
        let num = array[i];
        let numAsString = num.toString();
        
        let numAsStringLength = numAsString.length;
        
        let reversedNumAsString = '';
       
        for (let j = numAsStringLength - 1; j >= 0; j--) {
            reversedNumAsString += numAsString[j];
        }
        if (numAsString === reversedNumAsString) {
            isPalindrim = true;
        } else {
            isPalindrim = false;
        }

        console.log(isPalindrim);
    }
}

palindrimIntegers([32,2,232,1010]);
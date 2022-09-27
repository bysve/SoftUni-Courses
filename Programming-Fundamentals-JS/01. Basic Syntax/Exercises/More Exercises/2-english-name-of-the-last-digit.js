function englishNameOfTheLastDigit(num){

    let lastDigit = num % 10;
    let englishName = '';

    if(lastDigit == 1){
        englishName = "one";
    } else if (lastDigit == 2){
        englishName = 'two';
    } else if (lastDigit == 3){
        englishName = 'three';
    } else if (lastDigit == 4){
        englishName = 'four';
    } else if (lastDigit == 5){
        englishName = 'five';
    } else if (lastDigit == 6){
        englishName = 'six';
    } else if (lastDigit == 7){
        englishName = 'seven';
    } else if (lastDigit == 8){
        englishName = 'eight';
    } else if (lastDigit == 9){
        englishName = 'nine';
    } else if (lastDigit == 0){
        englishName = 'zero';
    }

    console.log(englishName);
}
englishNameOfTheLastDigit(512);
function stringOccurencesCounter(text, word){

    let counter = 0;

    let textArr = text.split(' ');

    textArr.forEach(el => {
        if(el === word){
            counter++;
        }
    });

    console.log(counter);
}

stringOccurencesCounter('This is a word and it also is a sentence',
'is');
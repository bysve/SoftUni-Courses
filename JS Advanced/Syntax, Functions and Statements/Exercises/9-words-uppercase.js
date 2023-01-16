function wordsUppercase(text) {

    console.log(text.match(/\w+/g).join(', ').toUpperCase());

}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');

function matchFullName(input) {

    let text = input;

    let regExp = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let match = text.match(regExp);

    console.log(match.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");
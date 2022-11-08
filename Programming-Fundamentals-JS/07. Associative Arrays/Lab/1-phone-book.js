function phoneBook(input) {

    let phoneBookObj = {};

    input.forEach(element => {
        let [name, phoneNum] = element.split(' ');

        phoneBookObj[name] = phoneNum;
    });

    for (const name in phoneBookObj) {
        console.log(`${name} -> ${phoneBookObj[name]}`);

    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
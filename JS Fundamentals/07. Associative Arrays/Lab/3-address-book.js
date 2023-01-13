function addressBook(input) {

    let addressBook = {};

    input.forEach(element => {
        let [name, address] = element.split(':');
        addressBook[name] = address;
    });

    let sorted = Object.entries(addressBook).sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (const line of sorted) {
        console.log(`${line[0]} -> ${line[1]}`);
    }

}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);
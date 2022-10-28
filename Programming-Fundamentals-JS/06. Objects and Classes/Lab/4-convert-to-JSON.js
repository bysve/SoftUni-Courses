function convertToJSON(firstName, lastName, hairColor) {

    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }

    let personJSON = JSON.stringify(person);
    console.log(personJSON);
}

convertToJSON('George', 'Jones', 'Brown');
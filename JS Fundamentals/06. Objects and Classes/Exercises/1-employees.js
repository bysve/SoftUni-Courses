function employees(list) {

    let employeeList = {};

    list.forEach(line => {
        employeeList[line] = line.length;
    });

    for (const key in employeeList) {
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);

    }
}

employees(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
function schoolGrades(input) {

    let studentsGrades = {};

    input.forEach(element => {
        let arr = element.split(' ');
        const name = arr.shift();
        let grades = arr.map(x => Number(x));

        if (!studentsGrades.hasOwnProperty(name)) {
            studentsGrades[name] = [];
        }

        studentsGrades[name] = studentsGrades[name].concat(grades);
    });

    let entries = Object.entries(studentsGrades);
    let sorted = entries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (const [name, grades] of sorted) {
        let sum = 0;
        grades.forEach(grade => {
            sum += grade;
        });
        let average = sum / grades.length;

        console.log(`${name}: ${average.toFixed(2)}`);

    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);
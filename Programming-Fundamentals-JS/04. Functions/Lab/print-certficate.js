function printCertificate(grade, names) {
    //Print Header
    printHeader();
    //Print Fullname
    let fullName = getFullName(names);
    console.log(fullName);
    //Print formatted grade
    let formattedGrade = getformattedGrade(grade);
    console.log(formattedGrade);

}

printCertificate(5.25, ['Peter', 'Carter']);

function printHeader() {
    console.log(`~~~-   {@}   -~~~`);
    console.log(`~-  Certficate -~`);
    console.log(`~~~-  ~---~  -~~~`);
}

function getFullName(names) {
    return `${names[0]} ${names[1]}`
}

function getformattedGrade(grade) {

    let score = '';

    if (grade < 3.00) {
        score = 'Fail';
        grade = 2;
    } else if (grade < 3.50) {
        score = 'Poor';
    } else if (grade < 4.50) {
        score = 'Good';
    } else if (grade < 5.50) {
        score = 'Very good'
    } else {
        score = 'Excellent';
    }

    if (score === 'Fail') {
        return `${score} (${grade})`;
    } else {
        return `${score} (${grade.toFixed(2)})`;
    }
}
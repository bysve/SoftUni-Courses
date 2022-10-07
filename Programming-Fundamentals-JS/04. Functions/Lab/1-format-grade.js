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
        console.log(`${score} (${grade})`);
    } else {
        console.log(`${score} (${grade.toFixed(2)})`);
    }

}

getformattedGrade(4.50);
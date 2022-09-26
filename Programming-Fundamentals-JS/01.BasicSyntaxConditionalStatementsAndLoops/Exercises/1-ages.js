function ages(age) {

    let type = '';
    if (age >= 0 && age < 3) {
        type = 'baby';
    } else if (age > 2 && age < 14) {
        type = 'child';
    } else if (age > 13 && age < 20) {
        type = 'teenager';
    } else if (age > 19 && age < 66) {
        type = 'adult';
    } else if (age >= 66) {
        type = 'elder';
    } else {
        type = 'out of bounds';
    }
    console.log(type);
}
ages(20);
ages(1);
ages(100);
ages(-1);
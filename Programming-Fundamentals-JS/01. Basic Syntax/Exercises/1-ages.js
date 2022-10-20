// Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder.
// The input comes as a single number parameter. The bounders are:
// •	0-2 (age) – is a baby;   
// •	3-13 (age) – is a child; 
// •	14-19 (age) – is a teenager;
// •	20-65 (age) – is an adult;
// •	>=66 (age) – is an elder; 
// •	In all other cases print – "out of bounds";
// The output should be printed to the console.

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
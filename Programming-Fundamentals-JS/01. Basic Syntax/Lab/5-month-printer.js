// Write a program, that takes an integer as a parameter and prints the corresponding month. If the number is more than 12 or less than 1 print "Error!"
// Input
// You will receive a single number.
// Output
// If the number is within the boundaries print the corresponding month, otherwise print "Error!"
// Examples
// Input	Output		Input	Output
// 2	    February	13	    Error!

function monthPrinter(number) {

    let month = '';
    if (number === 1) {
        month = 'January'
    } else if (number === 2) {
        month = 'February'
    } else if (number === 3) {
        month = 'March'
    } else if (number === 4) {
        month = 'April'
    } else if (number === 5) {
        month = 'May'
    } else if (number === 6) {
        month = 'June'
    } else if (number === 7) {
        month = 'July'
    } else if (number === 8) {
        month = 'August'
    } else if (number === 9) {
        month = 'September'
    } else if (number === 10) {
        month = 'October'
    } else if (number === 11) {
        month = 'November'
    } else if (number === 12) {
        month = 'December'
    } else {
        month = 'Error!'
    }

    console.log(month);
}
monthPrinter(2);
monthPrinter(13);
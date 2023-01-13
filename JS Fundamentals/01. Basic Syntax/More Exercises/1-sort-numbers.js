// Receive three numbers and you have to sort them in descending order. Print each number on a new line.

function sortNumbers(first, second, third) {

    if (first > second && first > third) {
        console.log(first);
        if (second > third) {
            console.log(second);
            console.log(third);
        } else { }
        console.log(third);
        console.log(second);
    } else if (second > first && second > third) {
        console.log(second);
        if (first > third) {
            console.log(first);
            console.log(third);
        } else {
            console.log(third);
            console.log(first);

        }
    } else if (third > first && third > second) {
        console.log(third);
        if (second > first) {
            console.log(second);
            console.log(first);
        } else {
            console.log(first);
            console.log(second);
        }
    }
}
sortNumbers(2, 1, 3);
// You will be given a string representing a username. The correct password will be that username reversed. 
// Until you receive the correct password print on the console: "Incorrect password. Try again.". 
// When you receive the correct password print: "User {username} logged in." 
// However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the program. 
// The input comes as an array of strings - the first string represents username and each subsequent string is a password.

function solve(input) {

    let index = 0;
    let user = input[index];
    index++;
    let reversePass = '';
    let counter = 0;

    for (let i = user.length - 1; i >= 0; i--) {
        reversePass += user[i];
    }

    let password = input[index];

    if (password === reversePass) {
        console.log(`User ${user} logged in.`);
    }

    while (password !== reversePass) {
        index++;
        console.log(`Incorrect password. Try again.`);
        counter++;

        if (counter == 3) {
            password = input[index];
            index++;
            if (password === reversePass) {
                console.log(`User ${user} logged in.`);
                break;
            }
            console.log(`User ${user} blocked!`);
            break;
        }
        password = input[index];
    }
}
solve(['Acer', 'login', 'go', 'let me in', 'recA']);
solve(['momo', 'omom']);
solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
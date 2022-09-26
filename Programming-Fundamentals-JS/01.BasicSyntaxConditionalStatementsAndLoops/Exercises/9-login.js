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
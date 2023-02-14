function solve(array) {

    const nums = [];
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => b - a,
        '*': (a, b) => a * b,
        '/': (a, b) => b / a,
    };

    array.forEach(element => {
        if (typeof element == 'number') {
            nums.push(element);
        } else {
            if (nums.length < 2) {
                return console.log("Error: not enough operands!");
            }
            nums.push(operations[element](nums.pop(), nums.pop()));

        }

    });

    if (nums.length > 1) {
        return console.log("Error: too many operands!");
    }
    return nums[0];
}

// solve([3,
//     4,
//     '+']
// // );
// solve([5,
//     3,
//     4,
//     '*',
//     '-']
// );

// solve([7,
//     33,
//     8,
//     '-'])

solve([15,
    '/'])
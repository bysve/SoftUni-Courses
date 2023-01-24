function solve(arr) {

    let counter = 1;
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element == 'add') {
            result.push(counter++);
        } else if (element == 'remove') {
            result.pop(counter++);
        }
    }

    if (result.length ) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }
}

solve(['add',
    'add',
    'add',
    'add']
);
solve(['add',
    'add',
    'remove',
    'add',
    'add']
);
solve(['remove',
    'remove',
    'remove']
);
function addAndRemove(arr) {

    let arrLength = arr.length;
    let newArr = [];

    for (let i = 0; i < arrLength; i++) {
        let currentCommand = arr[i];
        switch (currentCommand) {
            case 'add':
                newArr.push(i + 1);
                break;
            case 'remove':
                newArr.pop();
                break;
        }
    }
    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}
addAndRemove(['remove', 'remove', 'remove']);
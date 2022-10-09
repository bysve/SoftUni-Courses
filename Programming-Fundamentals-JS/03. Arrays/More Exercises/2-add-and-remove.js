function addAndRemove(commands) {

    let arrLength = commands.length;
    let resultArr = [];

    for (let i = 0; i < arrLength; i++) {
        let currentCommand = commands[i];
        switch (currentCommand) {
            case 'add':
                resultArr.push(i + 1);
                break;
            case 'remove':
                resultArr.pop();
                break;
        }
    }
    if (resultArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(resultArr.join(' '));
    }
}
addAndRemove(['remove', 'remove', 'remove']);
function arrayManipulator(arr, commands) {

    for (const command of commands) {
        let commandArray = command.split(' ');
        let action = commandArray[0];

        if (action === 'add') {

            arr.splice(Number(commandArray[1]), 0, Number(commandArray[2]));

        } else if (action === 'addMany') {

            let commandLength = commandArray.length;
            let indexToAdd = Number(commandArray[1]);

            for (let i = 2; i < commandLength; i++) {
                let numberToAdd = Number(commandArray[i]);

                arr.splice(indexToAdd, 0, numberToAdd);
                indexToAdd++;
            }

        } else if (action === 'contains') {
            let numToContain = (Number(commandArray[1]));

            if (arr.includes(numToContain)) {
                console.log(arr.indexOf(numToContain));
            } else {
                console.log(-1);
            }

        } else if (action === 'remove') {
            let indexToRemove = Number(commandArray[1]);
            arr.splice(indexToRemove, 1);

        } else if (action === 'shift') {
            let shiftNums = Number(commandArray[1]);

            for (let i = 0; i < shiftNums; i++) {
                let shiftedNum = arr.shift();
                arr.push(shiftedNum);
            }

        } else if (action === 'sumPairs') {

            for (let i = 0; i < arr.length; i++) {
                let first = arr[i];
                for (let j = i + 1; j < arr.length; j++) {
                    let second = arr[j];
                    let sum = first + second;
                    arr.splice(i, 2, sum);
                    break;
                }
            }

        } else if (action === 'print') {
            console.log(`[ ${arr.join(', ')} ]`);
            break;
        }
    }
}

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);
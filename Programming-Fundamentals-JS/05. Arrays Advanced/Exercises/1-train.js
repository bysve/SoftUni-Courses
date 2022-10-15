function train(arr) {

    let train = arr.shift().split(' ');
    let wagonCapacity = Number(arr.shift());

    for (const command of arr) {
        let currentCommand = command.split(' ');

        if (currentCommand[0] === 'Add') {
            train.push(currentCommand[1]);
        } else {
            let passengersInCurrentWagon = Number(train[i]);
            let newPassengers = Number(currentCommand[0]);
            for (let i = 0; i < train.length; i++) {
                if (passengersInCurrentWagon + newPassengers <= wagonCapacity) {
                    let newPassengersCount = passengersInCurrentWagon + newPassengers;
                    train.splice(i, 1, newPassengersCount.toString());
                    break;
                }
            }
        }
    }
    console.log(train.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
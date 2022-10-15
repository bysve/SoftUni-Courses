function arrayManilulations(commands) {

    let startArray = commands.shift().split(' ');

    for (const command of commands) {

        let currentCommand = command.split(' ');

        if (currentCommand.includes('Add')) {
            startArray.push(currentCommand[1]);
        } else if (currentCommand.includes('Remove')) {

            if (startArray.includes(currentCommand[1])) {
                startArray.splice(startArray.indexOf(currentCommand[1]), 1);
            }

        } else if (currentCommand.includes('RemoveAt')) {
            startArray.splice(currentCommand[1], 1);
        } else if (currentCommand.includes('Insert')) {
            startArray.splice(currentCommand[2], 0, currentCommand[1]);
        }
    }

    console.log(startArray.join(' '));
}


arrayManilulations
    (['6 12 2 65 6 42',
        'Add 8',
        'Remove 12',
        'RemoveAt 3',
        'Insert 6 2']
    );
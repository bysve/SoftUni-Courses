function wordTour(input) {

    let stops = input.shift();
    let result = stops;

    let line = input.shift();

    while (line !== 'Travel') {

        let commandData = line.split(':');
        let command = commandData.shift();

        switch (command) {
            case 'Add Stop':
                let index = Number(commandData[0]);
                if (index >= 0 && index < result.length) {
                    let string = commandData[1];
                    let resultArr = result.split('');
                    resultArr.splice(index, 0, string);
                    result = resultArr.join('');
                }
                console.log(result);
                break;
            case 'Remove Stop':
                let startIndex = Number(commandData[0]);
                let endIndex = Number(commandData[1]);
                if (startIndex >= 0 && startIndex < result.length && endIndex >= 0 && endIndex < result.length) {
                    let substring = result.substring(startIndex, endIndex + 1);
                    result = result.replace(substring, '');
                }
                console.log(result);
                break;
            case 'Switch':
                let oldString = commandData[0];
                let newString = commandData[1];

                let pattern = new RegExp(oldString, 'gi');
                result = result.replace(pattern, newString);

                console.log(result);
                break;
        }

        line = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${result}`);
}

wordTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]));
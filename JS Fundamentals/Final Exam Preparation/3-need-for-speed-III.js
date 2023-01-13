function needForSpeed(input) {

    let carsCount = Number(input.shift());

    let line = input.shift();

    let carsObj = {}

    for (let i = 0; i < carsCount; i++) {

        let [car, mileage, fuel] = line.split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        carsObj[car] = {
            'milage': mileage,
            'fuel': fuel,
        }

        line = input.shift();
    }

    while (line !== 'Stop') {

        let commandsData = line.split(' : ');
        let command = commandsData.shift();
        let car = commandsData.shift();

        switch (command) {
            case 'Drive':
                let distance = Number(commandsData[0]);
                let requierdFuel = Number(commandsData[1]);

                if (carsObj[car]['fuel'] < requierdFuel) {
                    console.log(`Not enough fuel to make that ride`);
                } else {
                    carsObj[car]['fuel'] -= requierdFuel;
                    carsObj[car]['milage'] += distance;
                    console.log(`${car} driven for ${distance} kilometers. ${requierdFuel} liters of fuel consumed.`);
                }
                if (carsObj[car]['milage'] >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete carsObj[car];
                }
                break;
            case 'Refuel':
                let refuelFuel = Number(commandsData[0]);

                if ((carsObj[car]['fuel'] + refuelFuel) > 75) {
                    refuelFuel = 75 - carsObj[car]['fuel'];
                }
                carsObj[car]['fuel'] += refuelFuel;

                console.log(`${car} refueled with ${refuelFuel} liters`);
                break;
            case 'Revert':
                let kilometers = Number(commandsData[0]);

                carsObj[car]['milage'] -= kilometers;

                if (carsObj[car]['milage'] < 10000) {
                    carsObj[car]['milage'] = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }

                break;
        }

        line = input.shift();
    }

    for (const car in carsObj) {

        console.log(`${car} -> Mileage: ${carsObj[car]['milage']} kms, Fuel in the tank: ${carsObj[car]['fuel']} lt.`);
    }
}

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);
function spaceTravel(args) {

    let route = args.shift().split('||');
    let fuel = Number(args.shift());
    let ammunition = Number(args.shift());

    let currentRoute = route.shift();
    let reachedTitan = true;

    while (currentRoute !== 'Titan') {

        let currentRouteArr = currentRoute.split(' ');
        let command = currentRouteArr[0];
        let value = Number(currentRouteArr[1]);

        if (command === 'Travel') {
            let distance = value;
            if (fuel >= distance) {
                fuel -= distance;
                console.log(`The spaceship travelled ${distance} light-years.`);
            } else {
                console.log('Mission failed.');
                reachedTitan = false;
                return
            }

        } else if (command === 'Enemy') {
            let enemyArmor = value;
            if (ammunition >= enemyArmor) {
                ammunition -= enemyArmor;
                console.log(`An enemy with ${enemyArmor} armour is defeated.`);
            } else {
                if (fuel >= enemyArmor * 2) {
                    fuel -= enemyArmor * 2;
                    console.log(`An enemy with ${enemyArmor} armour is outmaneuvered.`);
                } else {
                    console.log('Mission failed.');
                    reachedTitan = false;
                    return
                }
            }

        } else if (command === 'Repair') {
            let addedFuel = value;
            let addedAmmunition = value * 2;
            fuel += addedFuel;
            ammunition += addedAmmunition;
            console.log(`Ammunitions added: ${addedAmmunition}.`);
            console.log(`Fuel added: ${addedFuel}.`);
        }
        currentRoute = route.shift();
    }

    if (reachedTitan) {
        console.log('You have reached Titan, all passengers are safe.');
    }
}

spaceTravel((['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100'])
);
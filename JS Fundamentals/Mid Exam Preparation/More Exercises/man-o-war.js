function battleShips(args) {

    let pirateShip = args.shift().split('>').map(x => Number(x));
    let pirateShipLength = pirateShip.length;
    let warship = args.shift().split('>').map(x => Number(x));
    let warshipLength = warship.length;
    let maxHealth = Number(args.shift());
    let sunkShip = false;

    let currentLine = args.shift();

    while (currentLine !== 'Retire') {
        let lineAsArr = currentLine.split(' ');
        let command = lineAsArr[0];

        if (command === 'Fire') {
            let index = Number(lineAsArr[1]);
            let damage = Number(lineAsArr[2]);

            if (index >= 0 && index < warshipLength) {
                warship[index] -= damage;
                if (warship[index] <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    sunkShip = true;
                    break;
                }
            }

        } else if (command === 'Defend') {
            let startIndex = Number(lineAsArr[1]);
            let endIndex = Number(lineAsArr[2]);
            let damage = Number(lineAsArr[3]);

            if (startIndex >= 0 && startIndex < pirateShipLength && endIndex >= 0 && endIndex < pirateShipLength) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage;
                    if (pirateShip[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        sunkShip = true;
                        break;
                    }
                }
            }

        } else if (command === 'Repair') {
            let index = Number(lineAsArr[1]);
            let health = Number(lineAsArr[2]);

            if (index >= 0 && index < pirateShipLength) {
                pirateShip[index] += health;
                if (pirateShip[index] > maxHealth) {
                    pirateShip[index] = maxHealth;
                }
            }

        } else if (command === 'Status') {
            let minHealth = maxHealth * 0.20;
            let sectionsToRepair = 0;

            for (let i = 0; i < pirateShipLength; i++) {
                if (pirateShip[i] < minHealth) {
                    sectionsToRepair++;
                }
            }
            if (sectionsToRepair > 0) {
                console.log(`${sectionsToRepair} sections need repair.`);
            }
        }
        currentLine = args.shift();
    }


    if (!sunkShip) {
        let pirateShipSum = 0;
        for (const section of pirateShip) {
            pirateShipSum += section;
        }
        let warshipSum = 0;
        for (const section of warship) {
            warshipSum += section;
        }

        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }
}

battleShips(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])
    ;
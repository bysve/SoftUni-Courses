function arenaTier(inputData) {

    let gladiatorsList = {};

    let line = inputData.shift();

    while (line !== 'Ave Cesar') {
        //'Peter -> BattleCry -> 400'
        if (!line.includes('vs')) {
            let [name, skill, power] = line.split(' -> ');
            power = Number(power);

            if (!gladiatorsList.hasOwnProperty(name)) {
                gladiatorsList[name] = {};
                gladiatorsList[name][skill] = power;
            } else {
                if (!gladiatorsList[name].hasOwnProperty(skill)) {
                    gladiatorsList[name][skill] = power;
                } else {
                    if (gladiatorsList[name][skill] < power) {
                        gladiatorsList[name][skill] = power;
                    }
                }
            }
        }

        else {
            [first, second] = line.split(' vs ');

            if (gladiatorsList.hasOwnProperty(first) && gladiatorsList.hasOwnProperty(second)) {

                for (const skill in gladiatorsList[first]) {
                    if (gladiatorsList[second].hasOwnProperty(skill)) {
                        if (gladiatorsList[first][skill] > gladiatorsList[second][skill]) {
                            delete gladiatorsList[second];
                        } else {
                            delete gladiatorsList[first];
                        }
                    }
                }
            }
        }

        line = inputData.shift();
    }

    let gladiatorsPower = {};

    for (const gladiator in gladiatorsList) {
        let skillsEntries = Object.entries(gladiatorsList[gladiator]);
        let totalPower = 0;
        for (const skill of skillsEntries) {
            totalPower += skill[1];
        }
        gladiatorsPower[gladiator] = totalPower;
    }

    let sortedTotalPower = Object.entries(gladiatorsPower).sort((a, b) => b[1] - a[1]);

    sortedTotalPower.forEach(el => {
        console.log(`${el[0]}: ${el[1]} skill`);

        let gladiatorKeys = Object.keys(gladiatorsList);

        for (const key of gladiatorKeys) {
            if (el[0] === key) {
                let skillsEntries = Object.entries(gladiatorsList[key]).sort((a, b) => b[1] - a[1] + a[0].localeCompare(b[0]));

                for (const skill of skillsEntries) {
                    console.log(`- ${skill[0]} <!> ${skill[1]}`);
                }
            }
        }

    });

}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]);
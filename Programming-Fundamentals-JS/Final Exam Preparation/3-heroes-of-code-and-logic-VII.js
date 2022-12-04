function heroesOfCodeAndLogic(params) {

    let partyLength = params.shift();

    let partyObj = {};
    let line = params.shift();

    for (let i = 0; i < partyLength; i++) {

        let [hero, hitPoints, manaPoints] = line.split(' ');
        hitPoints = Number(hitPoints);
        manaPoints = Number(manaPoints);

        if (hitPoints > 100) {
            hitPoints = 100;
        }
        if (manaPoints > 200) {
            manaPoints = 200;
        }
        partyObj[hero] = {
            'HP': hitPoints,
            'MP': manaPoints,
        }
        line = params.shift();
    }

    while (line !== 'End') {

        let lineData = line.split(' - ');
        const action = lineData.shift();
        const hero = lineData.shift();

        switch (action) {
            case 'CastSpell':
                let neededMP = Number(lineData[0]);
                let spellName = lineData[1];
                if (partyObj[hero]['MP'] >= neededMP) {
                    partyObj[hero]['MP'] -= neededMP;
                    console.log(`${hero} has successfully cast ${spellName} and now has ${partyObj[hero]['MP']} MP!`);
                } else {
                    console.log(`${hero} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case 'TakeDamage':
                let damage = Number(lineData[0]);
                let attacker = lineData[1];
                partyObj[hero]['HP'] -= damage;
                if (partyObj[hero]['HP'] <= 0) {
                    console.log(`${hero} has been killed by ${attacker}!`);
                    delete partyObj[hero];
                } else {
                    console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${partyObj[hero]['HP']} HP left!`);
                }
                break;
            case 'Recharge':
                let manaAmount = Number(lineData[0]);
                if ((partyObj[hero]['MP'] + manaAmount) > 200) {
                    manaAmount = 200 - partyObj[hero]['MP'];
                    partyObj[hero]['MP'] = 200;
                } else {
                    partyObj[hero]['MP'] += manaAmount;
                }
                console.log(`${hero} recharged for ${manaAmount} MP!`);

                break;
            case 'Heal':
                let hitAmount = Number(lineData[0]);
                if ((partyObj[hero]['HP'] + hitAmount) > 100) {
                    hitAmount = 100 - partyObj[hero]['HP'];
                    partyObj[hero]['HP'] = 100;
                } else {
                    partyObj[hero]['HP'] += hitAmount;
                }
                console.log(`${hero} healed for ${hitAmount} HP!`);

                break;
        }

        line = params.shift();
    }

    for (const hero in partyObj) {
        
        console.log(`${hero}`);
        console.log(`  HP: ${partyObj[hero]['HP']}`);
        console.log(`  MP: ${partyObj[hero]['MP']}`);
    }
}

heroesOfCodeAndLogic([2,
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']
);
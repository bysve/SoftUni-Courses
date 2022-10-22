function counterStrike(args) {

    let energy = Number(args.shift());
    let battles = 0;
    let notEnoghtEnergy = false;

    let currentLine = args.shift();

    while (currentLine !== 'End of battle') {
        let distanceOfEnemy = Number(currentLine);
        if (energy >= distanceOfEnemy) {
            energy -= distanceOfEnemy;
            battles++;
            if(battles % 3 === 0){
                energy += battles; 
            }
        } else {
            notEnoghtEnergy = true;
            break;
        }
        currentLine = args.shift();
    }
    if (notEnoghtEnergy) {
        console.log(`Not enough energy! Game ends with ${battles} won battles and ${energy} energy`);
    } else {
        console.log(`Won battles: ${battles}. Energy left: ${energy}`);
    }
}

counterStrike((["200",
"54",
"14",
"28",
"13",
"End of battle"])
);
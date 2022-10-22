function shootForTheWin(args) {

    let targets = args.shift().split(' ').map(x => Number(x));
    let targetsLength = targets.length;
    let shotTargets = 0;

    let shotIndexString = args.shift();

    while (shotIndexString !== 'End') {
        let shotIndexNum = Number(shotIndexString);

        if (targets[shotIndexNum] > -1) {
            let shotIndexValue = targets[shotIndexNum];

            for (let i = 0; i < targetsLength; i++) {

                if (targets[i] > shotIndexValue && targets[i] > -1) {
                    targets[i] -= shotIndexValue;
                } else if (targets[i] <= shotIndexValue && targets[i] > -1) {
                    targets[i] += shotIndexValue;
                }
            }

            targets[shotIndexNum] = -1;
            shotTargets++;
        }
        shotIndexString = args.shift();
    }

    console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);
}

shootForTheWin((["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
);
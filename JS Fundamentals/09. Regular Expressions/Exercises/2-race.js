function race(raceData) {

    let racers = raceData.shift().split(', ');
    let raceObj = {};
    let namePattern = /[A-Za-z]/g;
    let distancePattern = /\d/g;

    let newLine = raceData.shift();

    while (newLine !== 'end of race') {

        let currentName = newLine.match(namePattern).join('');
        let cuurentDistance = newLine.match(distancePattern);

        if (racers.includes(currentName)) {
            let distance = 0;

            for (const el of cuurentDistance) {
                distance += Number(el);
            }

            if (!raceObj.hasOwnProperty(currentName)) {
                raceObj[currentName] = distance;
            } else {
                raceObj[currentName] += distance;
            }
        }
        newLine = raceData.shift();
    }

    let sorted = Object.entries(raceObj).sort((a, b) => b[1] - a[1]);

    let first = sorted[0][0];
    let second = sorted[1][0];
    let third = sorted[2][0];

    console.log(`1st place: ${first}`);
    console.log(`2nd place: ${second}`);
    console.log(`3rd place: ${third}`);

}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);
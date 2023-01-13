function heartDelivery(args) {

    let neighborhood = args.shift().split('@').map(x => Number(x));

    let currentLine = args.shift();
    let cupidsPosition = 0;

    while (currentLine !== 'Love!') {

        let jump = currentLine.split(' ');
        let houseIndex = Number(jump[1]);
        cupidsPosition += houseIndex;

        if (cupidsPosition >= neighborhood.length) {
            cupidsPosition = 0;
        }

        if (neighborhood[cupidsPosition] > 0) {

            neighborhood[cupidsPosition] -= 2;

            if (neighborhood[cupidsPosition] <= 0) {
                console.log(`Place ${cupidsPosition} has Valentine's day.`);
            }
            
        } else {
            console.log(`Place ${cupidsPosition} already had Valentine's day.`);
        }
        currentLine = args.shift();
    }
    console.log(`Cupid's last position was ${cupidsPosition}.`);
    let failedHouses = 0;

    for (const house of neighborhood) {
        if (house > 0) {
            failedHouses++;
        }
    }
    if (failedHouses > 0) {
        console.log(`Cupid has failed ${failedHouses} places.`);
    } else {
        console.log(`Mission was successful.`);
    }
}

heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])



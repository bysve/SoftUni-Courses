function mapDestination(string) {

    let destinations = [];
    let pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;

    let match = pattern.exec(string);

    while (match) {
        destinations.push(match.groups.destination);

        match = pattern.exec(string);
    }

    let points = 0;
    destinations.forEach(destination => points += destination.length);

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}

mapDestination("ThisIs some InvalidInput");
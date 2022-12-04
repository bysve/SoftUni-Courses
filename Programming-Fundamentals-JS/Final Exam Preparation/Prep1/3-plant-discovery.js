function plantDiscovery(input) {

    let number = Number(input.shift());
    let flowersObj = {};

    for (let i = 0; i < number; i++) {
        let line = input.shift();
        let [flowerName, rarity] = line.split('<->');
        rarity = Number(rarity);

        if (!flowersObj.hasOwnProperty(flowerName)) {
            flowersObj[flowerName] = {
                'rarity': rarity,
                'rating': [],
            }
        } else {
            flowersObj[flowerName]['rarity'] = rarity;
        }
    }

    let line = input.shift();

    while (line !== 'Exhibition') {

        let [command, args] = line.split(': ');
        let [plant, value] = args.split(' - ');
        value = Number(value);

        if (flowersObj.hasOwnProperty(plant)) {

            switch (command) {
                case 'Rate':
                    flowersObj[plant]['rating'].push(value);
                    break;
                case 'Update':
                    flowersObj[plant]['rarity'] = value;
                    break;
                case 'Reset':
                    flowersObj[plant]['rating'] = [];
                    break;
            }
        } else {
            console.log('error');
        }

        line = input.shift();
    }

    console.log(`Plants for the exhibition:`);
    for (const flower in flowersObj) {

        let rating = flowersObj[flower]['rating'];
        let sum = 0;
        for (const rate of flowersObj[flower]['rating']) {
            sum += rate;
        }

        let average = sum / rating.length;
        if (average) {
            flowersObj[flower]['rating'] = average;
        } else {
            flowersObj[flower]['rating'] = 0;
        }
        console.log(`- ${flower}; Rarity: ${flowersObj[flower]['rarity']}; Rating: ${flowersObj[flower]['rating'].toFixed(2)}`);
    }
}

plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"]);
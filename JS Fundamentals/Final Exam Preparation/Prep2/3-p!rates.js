function pirates(input) {

    let cities = {};

    let line = input.shift();

    while (line !== 'Sail') {

        let cityData = line.split('||');
        let city = cityData[0];
        let population = Number(cityData[1]);
        let gold = Number(cityData[2]);

        if (!cities.hasOwnProperty(city)) {
            cities[city] = {
                'population': population,
                'gold': gold
            }
        } else {
            cities[city]['population'] += population;
            cities[city]['gold'] += gold;
        }

        line = input.shift();
    }

    line = input.shift();

    while (line !== 'End') {

        let eventData = line.split('=>');
        let event = eventData.shift();
        let town = eventData.shift();

        switch (event) {
            case 'Plunder':
                let people = Number(eventData[0]);
                let stolenGold = Number(eventData[1]);
                cities[town]['population'] -= people;
                cities[town]['gold'] -= stolenGold;
                console.log(`${town} plundered! ${stolenGold} gold stolen, ${people} citizens killed.`);
                if (cities[town]['population'] <= 0 || cities[town]['gold'] <= 0) {
                    console.log(`${town} has been wiped off the map!`);
                    delete cities[town];
                }
                break;
            case 'Prosper':
                let gold = Number(eventData[0]);
                if (gold < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    cities[town]['gold'] += gold;
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town]['gold']} gold.`);
                }

                break;
        }

        line = input.shift();
    }

    let citiesCount = Object.keys(cities).length;

    if (citiesCount > 0) {
        console.log(`Ahoy, Captain! There are ${citiesCount} wealthy settlements to go to:`);

        for (const city in cities) {

            console.log(`${city} -> Population: ${cities[city]['population']} citizens, Gold: ${cities[city]['gold']} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);
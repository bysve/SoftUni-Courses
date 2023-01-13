function travelTime(inputArray) {

    let destinationsObj = {};

    inputArray.forEach(line => {
        let [country, town, price] = line.split(' > ');

        if (!destinationsObj.hasOwnProperty(country)) {
            destinationsObj[country] = {};
            destinationsObj[country][town] = Number(price);
        } else {
            if (!destinationsObj[country].hasOwnProperty(town)) {
                destinationsObj[country][town] = Number(price);
            } else {
                if (Number(price) < destinationsObj[country][town]) {
                    destinationsObj[country][town] = Number(price);
                }
            }
        }

    });

    let sortedCountries = Object.entries(destinationsObj).sort((a, b) => a[0].localeCompare(b[0]));

    for (const country of sortedCountries) {
        let townEntries = Object.entries(country[1]).sort((a, b) => a[1] - b[1]);
        let townObj = Object.fromEntries(townEntries)

        let towns = [];

        for (const key in townObj) {
            towns.push(`${key} -> ${townObj[key]}`);
        }
        console.log(`${country[0]} -> ${towns.join(' ')}`);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    );
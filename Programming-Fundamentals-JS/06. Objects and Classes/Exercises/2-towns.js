function towns(towns) {

    for (const line of towns) {
        let [town, latitude, longitude] = line.split(' | ');
        // let town = townInfo[0];
        // let latitude = Number(townInfo[1]).toFixed(2);
        // let longitude = Number(townInfo[2]).toFixed(2);

        let townObj = {
            town,
            latitude,
            longitude,
        }

        console.log(townObj);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);
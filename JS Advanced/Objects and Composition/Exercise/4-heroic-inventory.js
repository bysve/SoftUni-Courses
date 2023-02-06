function heroicInventory(array) {

    let result = [];

    for (const line of array) {
        let [name, level, items]= line.split(' / ');
        level = Number(level);
        //const itemsArray = items.split(', ');
        const currentHero = {
            name, 
            level,
            items: items ? items.split(', ') : [],
        }

        result.push(currentHero);
    }

    return JSON.stringify(result);
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);
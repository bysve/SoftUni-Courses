function heroesInventory(arr) {

    let heroes = [];

    arr.forEach(line => {
        [heroName, level, items] = line.split(' / ');
        let currentHero = {
            heroName,
            level: Number(level),
            items,
        }
        heroes.push(currentHero);
    });

    heroes.sort((a, b) => a.level - b.level);

    for (const hero of heroes) {

        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);

    }
}

heroesInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
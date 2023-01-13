function legendaryFarming(input) {

    let items = input.split(' ');
    let keyMaterials = {
        'shards': 0,
        'fragments': 0,
        'motes': 0,
    };

    let junkMaterials = {};

    for (let index = 0; index < items.length; index += 2) {
        const quantity = Number(items[index]);
        let item = items[index + 1].toLowerCase();

        if (item == 'shards' || item == 'fragments' || item == 'motes') {
            keyMaterials[item] += quantity;

            if (keyMaterials[item] >= 250) {
                if (item == 'shards') {
                    keyMaterials[item] -= 250;
                    console.log(`Shadowmourne obtained!`);
                } else if (item == 'fragments') {
                    keyMaterials[item] -= 250;
                    console.log(`Valanyr obtained!`);
                } else if (item == 'motes') {
                    keyMaterials[item] -= 250;
                    console.log(`Dragonwrath obtained!`);
                }
                break;
            }

        } else {

            if (!junkMaterials.hasOwnProperty(item)) {
                junkMaterials[item] = quantity;
            } else {
                junkMaterials[item] += quantity;
            }
        }
    }

    let sortedKeyMaterials = Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let sortedJunkMaterials = Object.entries(junkMaterials).sort((a, b) => a[0].localeCompare(b[0]));

    sortedKeyMaterials.forEach(el => {
        console.log(`${el[0]}: ${el[1]}`);
    });

    sortedJunkMaterials.forEach(el => {
        console.log(`${el[0]}: ${el[1]}`);
    });
}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
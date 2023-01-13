function treasureHunt(args) {

    let lootItems = args.shift().split('|');
    let currentLine = args.shift();

    while (currentLine !== 'Yohoho!') {

        let currentLineArr = currentLine.split(' ');
        let action = currentLineArr[0];

        switch (action) {
            case 'Loot':
                for (let i = 1; i < currentLineArr.length; i++) {
                    let item = currentLineArr[i];
                    if (!lootItems.includes(item)) {
                        lootItems.unshift(item);
                    }
                }
                break;
            case 'Drop':
                let index = Number(currentLineArr[1]);
                if (index >= 0 && index < lootItems.length) {
                    let removedItem = lootItems.splice(index, 1);
                    lootItems.push(removedItem.toString());
                }
                break;
            case 'Steal':
                let stolenItemsCount = Number(currentLineArr[1]);
                let lastIndex = lootItems.length;
                if (stolenItemsCount > lastIndex) {
                    stolenItemsCount = lastIndex;
                }
                let startItem = lastIndex - stolenItemsCount;
                let stolenItems = lootItems.splice(startItem, stolenItemsCount);

                console.log(stolenItems.join(', '));
                break;
        }
        currentLine = args.shift();
    }

    let sum = 0;

    for (const item of lootItems) {
        sum += item.length;
    }

    let lootItemsLength = lootItems.length;

    if (lootItemsLength > 0) {
        let averageLoot = sum / lootItemsLength;
        console.log(`Average treasure gain: ${averageLoot.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
    ;
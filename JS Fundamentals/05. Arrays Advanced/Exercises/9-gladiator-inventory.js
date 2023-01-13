function gladiatorInventory(arr) {

    let inventory = arr.shift().split(' ');

    for (const command of arr) {
        let newCommand = command.split(' ');
        let action = newCommand[0];
        let equipment = newCommand[1];

        switch (action) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                if (inventory.includes(equipment)) {
                    let index = inventory.indexOf(equipment);
                    inventory.splice(index, 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(equipment)) {
                    let index = inventory.indexOf(equipment);
                    inventory.splice(index, 1);
                    inventory.push(equipment);
                    break;
                }
            case 'Upgrade':
                let upgrade = equipment.split('-');
                if (inventory.includes(upgrade[0])) {
                    let index = inventory.indexOf(upgrade[0]);
                    let upgradedEquipment = `${upgrade[0]}:${upgrade[1]}`
                    inventory.splice(index+1, 0, upgradedEquipment);
                }
                break;
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);
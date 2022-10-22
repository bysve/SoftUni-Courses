function shoppingList(args) {

    let shoppingList = args.shift().split('!');

    let newLine = args.shift();

    while (newLine !== 'Go Shopping!') {

        let command = newLine.split(' ');
        let typeOfCommand = command[0];
        let item = command[1];

        switch (typeOfCommand) {
            case 'Urgent':
                if (!shoppingList.includes(item)) {
                    shoppingList.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (shoppingList.includes(item)) {
                    let index = shoppingList.indexOf(item);
                    shoppingList.splice(index, 1);
                }
                break;
            case 'Correct':
                let newItem = command[2];
                if (shoppingList.includes(item)) {
                    let index = shoppingList.indexOf(item);
                    shoppingList.splice(index, 1, newItem);
                }
                break;
            case 'Rearrange':
                if (shoppingList.includes(item)) {
                    let index = shoppingList.indexOf(item);
                    let removedItem = shoppingList.splice(index, 1);
                    shoppingList.push(removedItem);
                }
                break;
        }
        newLine = args.shift();
    }
    console.log(shoppingList.join(', '));
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);
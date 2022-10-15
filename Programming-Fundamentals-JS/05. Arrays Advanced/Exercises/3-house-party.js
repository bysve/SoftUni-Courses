function guestList(arr) {

    let guestList = [];

    for (const el of arr) {

        let row = el.split(' ');
        let rowLength = row.length;
        let name = row[0];

        if (rowLength === 3) {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        } else {
            if (guestList.includes(name)) {
                let nameIndex = name.indexOf();
                guestList.splice(nameIndex, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guestList.join('\n'));
}

guestList(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);
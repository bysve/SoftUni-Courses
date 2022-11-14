function carNumberTracker(input) {

    let parkingList = new Map();

    for (const line of input) {
        let [command, plate] = line.split(', ');

        if (command == 'IN') {
            parkingList.set(plate, command);
        } else if (command === 'OUT') {
            parkingList.delete(plate);
        }

    }

    let sortedParkingList = Array.from(parkingList).sort((a, b) => a[0].localeCompare(b[0]));
    if (sortedParkingList.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        sortedParkingList.forEach(car => {
            console.log(car[0]);
        });
    }
}
carNumberTracker(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
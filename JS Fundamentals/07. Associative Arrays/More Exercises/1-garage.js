function garage(input) {

    let garageObj = {};

    for (const line of input) {
        let [garageNum, car] = line.split(' - ');
        let cars = car.split(', ');

        if (!garageObj.hasOwnProperty(garageNum)) {
            garageObj[garageNum] = [];
        }

        let newCar = [];
        for (const data of cars) {
            let [key, value] = data.split(': ');
            newCar.push(`${key} - ${value}`);
        }
        garageObj[garageNum].push(newCar);
    }

    for (const number in garageObj) {
        console.log(`Garage № ${number}`);
        for (const car of garageObj[number]) {
            console.log(`--- ${car.join(', ')}`);
        }
    }

}

garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
function carFactory({model, power, color, carriage, wheelsize}) {


    const engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    }

    let engine = {};


    if (power <= 90) {
        engine = engines.small;
    } else if (power <= 120) {
        engine = engines.normal;
    } else {
        engine = engines.monster
    }


    let wheels = [];
    if (wheelsize % 2 === 0) {
        wheelsize--;
    }
    wheels = Array(4).fill(wheelsize);

    const result = {
        model,
        engine,
        carriage: {
            type: carriage,
            color
        },
        wheels,
    }

    console.table(result)
    return result;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
);
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);
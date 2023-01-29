function cityRecord(...params) {

    [name, population, treasury] = params;

    const cityObj = {
        name,
        population,
        treasury,
    }

    return cityObj;
}

cityRecord('Tortuga',
    7000,
    15000
);
cityRecord('Santo Domingo',
    12000,
    23500
);
function roadRadar(speed, area) {

    let limit = 0;

    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }

    const speeding = speed - limit;

    if (speeding <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
        return;z
    }

    let status = ''

    if (speeding <= 20) {
        status = 'speeding';
    } else if (speeding <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }
    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`);
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
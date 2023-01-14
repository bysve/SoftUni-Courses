function circleArea(param) {

    const type = typeof param;
    
    switch (type) {
        case 'number':
            const area = Math.PI * param ** 2;
            console.log(area.toFixed(2));
            break;

        default:
            console.log(`We can not calculate the circle area, because we receive a ${type}.`);
            break;
    }
}

circleArea(5);
circleArea('name');
function timeToWalk(steps, footprint, speedKmh) {

    const speedMs = speedKmh / 3.6;
    const distance = steps * footprint;
    const rest = Math.floor(distance / 500) * 60;
    const time = distance / speedMs + rest;

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60);
    const seconds = Math.round(time % 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);   
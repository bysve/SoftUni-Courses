function distanceBetween2Points(x1, y1, x2, y2){

    let quantity1 = Math.pow((y2 - y1), 2);
    let quantuty2 = Math.pow((x2 - x1), 2);
    distance = Math.sqrt(quantity1 + quantuty2);

    console.log(distance);
}
distanceBetween2Points(2, 4, 5, 0);
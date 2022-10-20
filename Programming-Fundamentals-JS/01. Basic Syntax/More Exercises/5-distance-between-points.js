// Write a JS function that calculates the distance between two points by given x and y coordinates. 
// The input comes as four number elements in the format x1, y1, x2, y2. Each pair of elements are the coordinates of a point in 2D space.
// The output should be returned as a result of your function.
// Examples
// Input	        Output
// 2, 4, 5, 0	    5

function distanceBetween2Points(x1, y1, x2, y2){

    let quantity1 = Math.pow((y2 - y1), 2);
    let quantuty2 = Math.pow((x2 - x1), 2);
    distance = Math.sqrt(quantity1 + quantuty2);

    console.log(distance);
}
distanceBetween2Points(2, 4, 5, 0);
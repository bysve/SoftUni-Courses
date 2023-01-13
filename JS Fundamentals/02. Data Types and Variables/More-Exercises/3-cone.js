// Write a function to calculate a cone’s volume and total surface area by given height and radius of the base.
// The input comes as two number arguments. The first element is the cone’s radius and the second is its height.
// The output should be printed to the console on a new line for every result. The result should be formatted to the fourth decimal point.

function cone(r, h){

    let s = Math.sqrt(r * r + h * h);
    let volume = Math.PI * r * r * h / 3;
    console.log(`volume = ${volume.toFixed(4)}`);
    let area = Math.PI * r * (r + s);
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5);
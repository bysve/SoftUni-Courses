// Write a function that receives a number M and a number N (M will always be bigger than N). Print all numbers from M to N.

function numbersMtoN(start,end) {
    for (let i = start; i >= end; i--) {
      console.log(i);
    }
}
numbersMtoN(5,2);
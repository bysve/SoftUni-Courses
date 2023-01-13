function addAndSubtract(firstNum, secondNum, thirdNum) {

    let add = () => firstNum + secondNum;
    let sum = add(firstNum, secondNum);

    let subtract = () => sum - thirdNum;
    
    let result = subtract(add(), thirdNum);
   
    console.log(result);
}

addAndSubtract(23, 6, 10);
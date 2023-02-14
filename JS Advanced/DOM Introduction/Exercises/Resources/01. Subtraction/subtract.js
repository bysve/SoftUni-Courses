function subtract() {
    const firstNum = document.getElementById('firstNumber').value;
    const secondNum = document.getElementById('secondNumber').value;

    const divResult = document.getElementById('result');
    divResult.textContent = Number(firstNum) - Number(secondNum);
}
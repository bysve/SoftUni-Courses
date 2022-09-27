function sumOfOddNumbers(num) {
    let oddNum = 1;
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        console.log(oddNum);
        if(i == num){
            break;
        }
        oddNum += 2;
        sum += oddNum;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
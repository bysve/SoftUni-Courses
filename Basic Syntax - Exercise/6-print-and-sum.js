function triangle(startNum, endNum){

    let output = '';
    let sum = 0;

    for (let i = startNum; i <= endNum; i++){
        sum += i;
        output += i + ' ';
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}
triangle(5, 10);
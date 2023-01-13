function buildWall(arr) {

    let arrOfNums = arr.map(a => Number(a));
    let totalConcrete = 0;
    let days = 0;

    while (arrOfNums.length) {

        let dailyConcrete = 0;
        for (let i = 0; i < arrOfNums.length; i++) {
            let singleNum = arrOfNums.splice(i, 1);
            if(singleNum[i] < 30){
                singleNum[i] += 1;
                dailyConcrete += 195;
            }
        }
        days++;
        console.log(dailyConcrete);
        arrOfNums.length -= 1;
    }
}
buildWall([21, 25, 28]);
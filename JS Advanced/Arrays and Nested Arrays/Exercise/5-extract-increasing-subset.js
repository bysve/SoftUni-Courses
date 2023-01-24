function solve(arr) {

    // let biggestNum = arr.shift();
    // const resultArr = [biggestNum];

    // for (let i = 0; i < arr.length; i++) {
    //     const currentEl = arr[i];
    //     if (currentEl > biggestNum) {
    //         biggestNum = currentEl;
    //         resultArr.push(biggestNum);
    //     }
    // }

    let biggest = arr[0];
    return arr.reduce((acc, el) =>{
        if(el >= biggest){
            biggest = el;
            acc.push(biggest);
        }
        return  acc;
    },[]);

    
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);
solve([1,
    2,
    3,
    4]
);
solve([20,
    3,
    2,
    15,
    6,
    1]
);
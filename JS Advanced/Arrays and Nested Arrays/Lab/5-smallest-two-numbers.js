function smallestTwoNums(arr){

    console.log(arr.sort((a, b) => a-b).slice(0, 2).join(' '));
}

smallestTwoNums([30, 15, 50, 5]);
smallestTwoNums([3, 0, 10, 4, 7, 3]);
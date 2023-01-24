function sortNums(array){

    const result = [];
    array = array.sort((a, b) => a-b);
    
    while(array.length !== 0){
        result.push(array.shift(), array.pop());
    }

   return result;
}

sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
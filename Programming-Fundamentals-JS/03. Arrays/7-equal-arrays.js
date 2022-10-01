function equalArrays(arr1, arr2){

    let isIqual = true;
    let differentIndex;
    let sum = 0;

    for(let i = 0; i < arr1.length; i++){
        if(Number(arr1[i]) != Number(arr2[i])){
            isIqual = false;
            differentIndex = i;
            break;
        } else{
            sum += Number(arr1[i]);
        }
    }
    if(isIqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else{
        console.log(`Arrays are not identical. Found difference at ${differentIndex} index`);
    }
}

equalArrays(['1'], ['10']);
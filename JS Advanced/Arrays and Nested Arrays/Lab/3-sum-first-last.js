function sumFirstLast(arr){

    const first = Number(arr[0]);
    const last = Number(arr[arr.length - 1]);

    return first + last;
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);

function evenAndOddSubtracion(arr) {

    let subtraction = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            subtraction += arr[i];
        } else {
            subtraction -= arr[i];
        }
    }

    console.log(subtraction);
}

evenAndOddSubtracion([1, 2, 3, 4, 5, 6]);
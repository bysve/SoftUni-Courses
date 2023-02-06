function calorieObject(array){

    let result = {};

    for (let index = 0; index < array.length; index+=2) {
        
        result[array[index]] = Number(array[index+1]);
        
    }

    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
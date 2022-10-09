function matrix(number) {



    function createMatrix() {

        for (let row = 0; row < number; row++) {
            let arr = [];
            for (col = 0; col < number; col++) {
                arr.push(number);
            }
            console.log(arr.join(' '));
        }
    }
    createMatrix();

}

matrix(3);
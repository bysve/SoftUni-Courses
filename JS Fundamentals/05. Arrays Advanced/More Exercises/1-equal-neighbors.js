function equalNeighborPairs(args) {

    let counter = 0;

    for (let i = 0; i < args.length - 1; i++) {

        for (let j = 0; j < args[i].length; j++) {
            let currentEl = args[i][j];
            let nextEl = args[i][j + 1];
            let nextRowEl = args[i + 1][j];

            if (currentEl === nextEl) {
                counter++;
            }

            if (currentEl === nextRowEl) {
                counter++;
            }
        }
    }

    for (let k = args.length - 1; k < args.length; k++) {

        for (let j = 0; j < args[k].length; j++) {
            let currentEl = args[k][j];
            let nextEl = args[k][j + 1];

            if (currentEl === nextEl) {
                counter++;
            }
        }
    }
    console.log(counter);
}

equalNeighborPairs([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);
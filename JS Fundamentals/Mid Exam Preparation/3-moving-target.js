function movingTarget(args) {

    let targetSequence = args.shift().split(' ').map(x => Number(x));

    let currentLine = args.shift();

    while (currentLine !== 'End') {
        let lineArr = currentLine.split(' ');
        let command = lineArr[0];
        let index = Number(lineArr[1]);
        let value = Number(lineArr[2]);

        switch (command) {
            case 'Shoot':
                if (targetSequence[index]) {
                    targetSequence[index] -= value;
                    if (targetSequence[index] <= 0) {
                        targetSequence.splice(index, 1);
                    }
                }
                break;
            case 'Add':
                if (targetSequence[index]) {
                    targetSequence.splice(index, 0, value);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                let radius = value;
                let startIndex = index - radius;
                let endIndex = index + radius;

                if (startIndex >= 0 && endIndex < targetSequence.length) {
                    targetSequence.splice(startIndex, radius * 2 + 1);
                } else {
                    console.log('Strike missed!');
                }
                break;
        }
        currentLine = args.shift();
    }
    console.log(targetSequence.join('|'));
}

movingTarget((["1 2 3 4 5",
"Strike 0 1",
"End"])
);
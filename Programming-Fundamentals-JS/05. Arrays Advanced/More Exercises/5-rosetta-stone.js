function rosettaStone(args) {

    let templateLength = Number(args.shift());
    let template =  [];

    for(let i = 0; i < templateLength; i++){
       let templateRow = args.shift().split(' ').map(x => Number(x));
       template.push(templateRow);
    }

    let messageMatrix = args.map(x => x.split(' ').map(x => Number(x)));
    let messageLength = messageMatrix.length; 
    
    let message = [];

    for(let i = 0; i < templateLength; i += templateLength){
        let firstRow = [];
        let seconRow = [];
        for (let j = 0; j < templateLength; j++){
            firstRow.push(messageMatrix[i][j]);
            seconRow.push(messageMatrix[i+1][j]);
        }
        message.push(firstRow, seconRow);



        console.log(...message);
    }
}

rosettaStone(
        ['2',
        '59 36',
        '82 52',

        '4 18 25 19 8',
        '4 2 8 2 18',
        '23 14 22 0 22',
        '2 17 13 19 20',
        '0 9 0 22 22']
);
function stringLength(first, second, third) {

    const totalLength = first.length + second.length + third.length;
    const averageLength = Math.round(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');
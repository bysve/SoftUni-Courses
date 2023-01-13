function fancyBarcodes(input) {

    let lines = Number(input.shift());

    let productPattern = /[@][#]+(?<product>[A-Z][A-Za-z\d|]{4,}[A-Z])[@][#]+/g;
    let digitPattern = /\d/g;
    
    for (let i = 0; i < lines; i++) {

        let string = input[i];
        let barcode = productPattern.exec(string);
        if (barcode) {
            let product = barcode.groups.product;
            let productGroup = product.match(digitPattern);

            if (!productGroup) {
                productGroup = '00';
            } else {
                productGroup = productGroup.join('');
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log(`Invalid barcode`);
        }
        barcode = productPattern.exec(string);
    }
}

fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])

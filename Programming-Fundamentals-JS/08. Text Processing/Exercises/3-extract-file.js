function fileExtractor(string) {

    let file = string.split('\\').pop();

    let index = file.lastIndexOf('.');
    let extension = file.substring(index + 1);
    let fileName = file.substring(0, index);
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

fileExtractor('C:\\Internal\\training-internal\\Template.bak.pptx');
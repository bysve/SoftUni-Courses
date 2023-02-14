function colorize() {
    const array = Array.from(document.getElementsByTagName('tr'));
    array.filter((e, i) => {if(i % 2 !== 0)  e.style.background = 'teal'});
}
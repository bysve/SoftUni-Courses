let map = new Map();
map.set('first', 'Svetlana');
map.set('second', 'Denis');
map.set('third', 'Toshko');
map.set('fourth', 'Viki');
map.get('second');


let sorted = Array.from(map.entries())
    .sort((a, b) => a[0].localeCompare(b[0]));
console.log(...sorted);



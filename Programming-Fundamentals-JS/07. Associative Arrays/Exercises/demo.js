let name = 'Pesho:';
let newName = name.substring(0, name.length-3);
console.log(newName);


let data = 'John: 2C, 4H, 9H, AS, QS';

let [player, cards] = data.split(': ');

console.log(player);
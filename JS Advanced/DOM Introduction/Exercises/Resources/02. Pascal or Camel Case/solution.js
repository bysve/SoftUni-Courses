function solve() {
  const text = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');
  const textArray = text.split(' ');
  const resultArray = [];

  switch (convention) {
    case 'Camel Case':
      textArray.forEach(element => {
        resultArray.push(element[0].toUpperCase() + element.slice(1).toLowerCase());
      });
      resultArray[0] = resultArray[0][0].toLowerCase() + resultArray[0].slice(1);
      break;
    case 'Pascal Case':
      textArray.forEach(element => {
        resultArray.push(element[0].toUpperCase() + element.slice(1).toLowerCase());
      });
      break;
    default:
      resultArray.push('Error!');
      break;
  }

  result.textContent = resultArray.join('');
}
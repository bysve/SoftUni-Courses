function solve() {
  const textArea = document.getElementById('input').value;

  const sentecesArray = textArea.split('.');
  sentecesArray.pop()
  const output = document.getElementById('output');

  const array = sentecesArray.slice();
  if (array.length < 3) {
    const para = document.createElement('p');
    para.innerHTML = (`${array.join('.')}.`)
    output.appendChild(para);
  } else {

    for (let index = 0; index < array.length; index += 3) {
      const result = [];

      result.push(sentecesArray.splice(0, 3));
      const para = document.createElement('p');
      para.innerHTML = (`${result.join('.')}.`)
      output.appendChild(para);
    }
  }
}
function extractText() {
    const items = document.getElementById('items').children;
    const arr = Array.from(items);
    const result = arr.map(li => li.textContent).join('\n');
    document.getElementById('result').value = result;
}
function addItem() {
   const input = document.getElementById('newItemText');
   const li = document.createElement('li');
   li.textContent = input.value;
   const list = document.getElementById('items');
   list.appendChild(li);
}
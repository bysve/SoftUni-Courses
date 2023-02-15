function addItem() {
    const input = document.getElementById('newItemText');
    const li = document.createElement('li');
    li.textContent = input.value;

    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => li.remove());

    const list = document.getElementById('items');
    list.appendChild(li);
}
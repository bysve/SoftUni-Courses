function deleteByEmail() {
    const input = document.querySelector('input').value;
    const rows = document.querySelectorAll('tbody tr');
    const rowsArray = Array.from(rows);

    let deleted = false;

    rowsArray.forEach(row => {

        const col = row.children[1];
        if (col.textContent === input) {
            deleted = true;
            row.remove();
        }
    })

    document.getElementById('result').textContent = deleted ? 'Deleted.' : 'Not found.';
}
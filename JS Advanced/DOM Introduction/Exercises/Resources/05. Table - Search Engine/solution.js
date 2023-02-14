function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const input = document.getElementById('searchField').value;

      const data = Array.from(document.querySelectorAll('tbody tr'));

      data.forEach((row) => {
         if (row.textContent.includes(input)) {
            row.classList.add('select')
         } else if (!row.textContent.includes(input)) {
            row.classList.remove('select');
         }
      })
   }
}
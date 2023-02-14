function search() {
   const inputText = document.getElementById('searchText').value;

   const result = document.getElementById('result');
   const list = Array.from(document.querySelectorAll('#towns li'));
   let counter = 0; 

   list.forEach((el) => {
      if (el.textContent.includes(inputText)) {
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
         counter++;
      } else {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = 'none';
         
      }
   });

   result.textContent = `${counter} matches found`;
  
}

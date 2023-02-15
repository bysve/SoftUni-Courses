function solve() {
   const shoppingCart = document.getElementsByClassName('shopping-cart')[0];
   const result = document.getElementsByTagName('textarea')[0];

   const products = [];
   let totalPrice = 0;
   let checkoutDone = false;

   shoppingCart.addEventListener('click', (event) => {
      if (event.target.nodeName !== 'BUTTON') {
         return;
      }

      if(checkoutDone){
         return;
      }

      let btn = event.target;


      if (Array.from(btn.classList).indexOf('add-product') >= 0) {

         const productElement = event.target.parentElement.parentElement;

         const name = productElement.querySelectorAll('.product-title')[0].textContent;
         const price = productElement.querySelectorAll('.product-line-price')[0].textContent;

         result.textContent += `Added ${name} for ${Number(price).toFixed(2)} to the cart.\n`;

         if(products.indexOf(name) < 0){
            products.push(name);
         }

         totalPrice += Number(price);
      } else if((Array.from(btn.classList).indexOf('checkout') >= 0)){
         const list = products.join(', ')
         result.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`
         checkoutDone = true;
      }

   });
}
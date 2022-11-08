class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = {
            name: this.addProduct(),
            price: this.addProduct(),
            quantity: this.addProduct(),
        }
    }
    totalCost(price, quantity) {
        let totalCost = this.storage.price * this.storage.quantity;
    }

    addProduct(product) {
        this.storage = product;
    }

    getProducts() {

    }

}

let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

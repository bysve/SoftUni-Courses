function cats(arr) {

    for (const line of arr) {

        let lineArr = line.split(' ');
        let catName = lineArr[0];
        let catAge = lineArr[1];

        class Cat {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }

            meow() {
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }

        let newCat = new Cat(catName, catAge);
        newCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);
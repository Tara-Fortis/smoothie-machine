class Smoothie {
    //Smoothie class memebers
    milk;
    fruit;
    ice;
    size;
    drink;
    // Smoothie class constructor
    constructor(milk, fruit, ice, size) {
        this.milk = milk;
        this.fruit = fruit;
        this.ice = ice;
        this.size = size;
        this.drink = function () {
            return `You have ordered a ${this.size} smoothie with ${this.milk}, ${this.fruit}, and ${this.ice}.`;
        }
    }
}
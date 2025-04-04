// Create a Smoothie Class
class Smoothie {
    // Smoothie Class Members
    milk;
    fruit;
    ice;
    size;
    // Smoothie class constructor
    constructor(milk, fruit, ice, size) {
        this.milk = milk;
        this.fruit = fruit;
        this.ice = ice;
        this.size = size;

    }
    drink = function () {
        return `You have ordered a ${this.size} smoothie with ${this.milk}, ${this.fruit}, and ${this.ice}.`;
    }

}
// create a Smoothie Class Method
function createSmoothie() {
    // get the values from the form
    let milk = document.querySelector('input[name="milk"]').value;
    let fruit = document.querySelector('input[name="fruit"]').value;
    let size = document.querySelector('input[name="size"]').value;
    let ice = document.querySelector('input[name="ice"]');
    let smoothieOrder = document.querySelector('#smoothieOrder');
    // if ice is checked, set ice to yes, else set ice to no
    if (ice.checked) {
        ice = "ice";
    } else {
        ice = "no ice";
    }
    // create a new smoothie object
    let smoothie = new Smoothie(milk, fruit, ice, size);
    //output the smoothie order
    smoothieOrder.innerHTML = smoothie.drink();
}
// Smoothie Class Event Listeners
let orderButton = document.querySelector('button[type="submit"]');
orderButton.addEventListener('click', function (event) {
    createSmoothie();
    event.preventDefault();
});
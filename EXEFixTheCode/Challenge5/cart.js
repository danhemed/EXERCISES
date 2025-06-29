export var cart = [
    { name: "Apple", price: 2, quantity: 3 },
    { name: "Banana", price: 1, quantity: 5 },
    { name: "Orange", price: 1.5, quantity: 2 },
];

export function getTotal() {
    let total = 0;
    
    cart.forEach(obj => total += (obj.price * obj.quantity));

    return total;
}

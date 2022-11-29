// Your Goal: Add Up Only Pizza Orders
// Modify the numberOfPizzas function to only count pizzas when the order.type is equal to ORDER_TYPES.PIZZA.

// The orders will have a type keyword:

// const orders = [
//     { pizzas: 3, type: ORDER_TYPES.PIZZA },
//     { wings: 12, type: ORDER_TYPES.WINGS },
// ];

// My solution =>

const ORDER_TYPES = require('./orderTypes');
function numberOfPizzas(orders) {
    let sum = 0;
    for(let i = 0; i < orders.length; i++){
      if(orders[i].type === ORDER_TYPES.PIZZA)
        sum += orders[i].pizzas;
    }
    return sum;
}
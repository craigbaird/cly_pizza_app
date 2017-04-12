pizzaApp.controller('OrderController', ['PizzaService', function(PizzaService){
  console.log('in the order controller');
  var order = this;
  // order.orderObject = PizzaService.orderObject;

  var newPizza = {
    size: '',
    toppings: []
  };
  order.newPizza = newPizza;
  var toppingsArray = ['pepperoni', 'sausage', 'olives', 'mushrooms', 'pineapple'];
  order.toppingsArray = toppingsArray;
  order.addToppings = function(topping) {
    newPizza.toppings.push(topping);
    var index = toppingsArray.indexOf(topping);
    toppingsArray.splice(index,1);
  };
  
  order.addPizza = PizzaService.addPizza;

}]);

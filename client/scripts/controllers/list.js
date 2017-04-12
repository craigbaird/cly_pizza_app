pizzaApp.controller('ListController', ['PizzaService', function(PizzaService){
  var list = this;
  list.orderedPizzas = PizzaService.allPizzas.pizzaList;
  // list.confirmPizza = PizzaService.confirmPizza;
  // list.deletePizza =  PizzaService.deletePizza;


}]);

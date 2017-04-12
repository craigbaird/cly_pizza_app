pizzaApp.factory('PizzaService', function(){
  var allPizzas = {
    pizzaList: []
  };

  function addPizza(newPizza){
    if (newPizza.size === "large"){
      newPizza.cost = 8;
    } else if (newPizza.size ==="medium") {
      newPizza.cost = 7;
    } else {
      newPizza.cost = 6;
    }
    for (var i = 0; i < newPizza.toppings.length; i++) {
      newPizza.cost++;
    }
    allPizzas.pizzaList.push(newPizza);
  }

//below functions don't run
  var confirmedPizzas = {
    pizzaList: []
  };

  function confirmPizza(pizza){
    confirmedPizzas.pizzaList.push(pizza);
    console.log("Your confirmed pizzas are: ", confirmedPizzas);
  }

  function deletePizza(pizza){
    console.log("foo bar", pizza);
  }


  return {
    addPizza : addPizza,
    allPizzas : allPizzas,
    confirmPizza : confirmPizza,
    deletePizza : deletePizza
  };
});

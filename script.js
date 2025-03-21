function init(){
    renderMainDishes()
    renderSideDishes()
    renderBasket()
}

// Gerichte rendern
function renderMainDishes(){
    
    for (let dishesIndex = 0; dishesIndex < dishes.length; dishesIndex++) {
        document.getElementById('render_dishes').innerHTML += getDishes(dishesIndex);
    } 
}

function renderSideDishes(){

  for (let sideDishesindex = 0; sideDishesindex < sideDishes.length; sideDishesindex++) {
    document.getElementById('render_side_dishes').innerHTML += getSideDishes(sideDishesindex);
  }
}




// Funktioniert
function renderBasket(){

    for (let dishesIndex = 0; dishesIndex < dishes.length; dishesIndex++) {
      if (dishes[dishesIndex].amount > 0) {
            document.getElementById('render_basket_order').innerHTML = getBasket(dishesIndex);
          }
      }
  }

function addMenu(dishesIndex){
  dishes[dishesIndex].amount += 1

  console.log(dishes);
  
  renderBasket()
}



// Filter Methode zum testen
function addMenuFilter(){

  result = dishes.filter(dish => dish.amount > 0);

  console.log(result);

}







// Druckt nur neue Einträge ins Array und den Warenkorb
// function addMenu(dishesIndex){
//   basket.push(dishes[dishesIndex]);

//   console.log(basket);

//   renderBasket();
// }


// Menü dem Warenkorb hinzufügen
// function addMenu(dishesIndex){
//   document.getElementById('render_basket_order').innerHTML = getBasketOrder(dishesIndex);
//   dishes[dishesIndex].amount += 1
// }

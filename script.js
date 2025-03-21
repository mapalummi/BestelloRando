function init(){
    renderMainDishes()
    renderSideDishes()
    
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



// Menü dem Warenkorb hinzufügen
function addMenu(dishesIndex){
  document.getElementById('render_basket_order').innerHTML += getBasketOrder(dishesIndex);
  dishes[dishesIndex].amount += 1
  console.log(dishes[dishesIndex].amount);
  
}


